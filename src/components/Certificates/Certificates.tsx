import { useState, useEffect } from "react"
import { Document, Page, pdfjs } from "react-pdf"
import { certificates } from "../../data/certificates/certificates"
import "./Certificates.css"

import "react-pdf/dist/Page/AnnotationLayer.css"
import "react-pdf/dist/Page/TextLayer.css"

// worker (keep your existing setup if it works)
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString()

const Certificates = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null)

  const [failed, setFailed] = useState<Record<number, boolean>>({})

  const visibleCertificates = Object.values(certificates).filter(
    (certificate) => certificate.show
  )

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedPdf(null)
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <>
      <>

        <h2 className="section-title">Certificates</h2>

        <div className="certificates__grid">
          {visibleCertificates.map((certificate) => {
            const isFailed = failed[certificate.id]

            return (
              <div
                className="certificate-card"
                key={certificate.id}
                onClick={() => setSelectedPdf(certificate.pdfPath)}
              >
                <div className="certificate-card__thumbnail">

                  {/* ✅ IF PDF NOT FAILED → TRY PDF */}
                  {!isFailed ? (
                    <Document
                      file={certificate.pdfPath}
                      loading={<p>Loading preview...</p>}
                      onLoadError={() => {
                        // mark as failed → switch to image
                        setFailed((prev) => ({
                          ...prev,
                          [certificate.id]: true
                        }))
                      }}
                    >
                      <Page
                        pageNumber={1}
                        width={250}
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                      />
                    </Document>
                  ) : (
                    /* ✅ FALLBACK IMAGE */
                    <img
                      src={certificate.image}
                      alt={certificate.title}
                    />
                  )}

                </div>

                <h3 className="certificate-card__title">
                  {certificate.title}
                </h3>
              </div>
            )
          })}
        </div>
      </>

      {/* MODAL */}
      {selectedPdf && (
        <div
          className="certificate-modal"
          onClick={() => setSelectedPdf(null)}
        >
          <div
            className="certificate-modal__content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="certificate-modal__close"
              onClick={() => setSelectedPdf(null)}
            >
              ×
            </button>

            <iframe
              src={`${selectedPdf}#toolbar=0&navpanes=0`}
              width="100%"
              height="100%"
              title="Certificate Preview"
            />
          </div>
        </div>
      )}
    </>
  )
}

export default Certificates