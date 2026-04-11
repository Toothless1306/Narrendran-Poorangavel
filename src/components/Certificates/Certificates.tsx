import { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { certificates } from "../../data/certificates/certificates";
import "./Certificates.css";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = "//unpkg.com/pdfjs-dist@5.4.296/build/pdf.worker.min.mjs";

const Certificates = () => {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [failedThumbs, setFailedThumbs] = useState<Record<number, boolean>>({});
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pdfError, setPdfError] = useState<string | null>(null);
  const [useFallback, setUseFallback] = useState(false);

  const visibleCertificates = Object.values(certificates).filter(
    (certificate) => certificate.show
  );

  // Close modal on ESC
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedPdf(null);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  const handleOpenPdf = (pdfPath: string) => {
    setSelectedPdf(pdfPath);
    setNumPages(null);
    setPageNumber(1);
    setPdfError(null);
    setUseFallback(false);
  };

  // Detect mobile user agent
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  // If react-pdf fails, we can offer a fallback
  const handlePdfLoadError = (error: Error) => {
    console.error("PDF load error:", error);
    setPdfError(error.message);
    // On mobile, automatically fallback to native viewer
    if (isMobile) setUseFallback(true);
  };

  return (
    <section id="certificates">
      <h2 className="section-title">Certificates</h2>

      <div className="certificates__grid">
        {visibleCertificates.map((certificate) => {
          const isThumbFailed = failedThumbs[certificate.id];
          return (
            <div
              className="certificate-card"
              key={certificate.id}
              onClick={() => handleOpenPdf(certificate.pdfPath)}
            >
              <div className="certificate-card__thumbnail">
                {!isThumbFailed ? (
                  <Document
                    file={certificate.image}
                    loading={<p>Loading preview...</p>}
                    onLoadError={() =>
                      setFailedThumbs((prev) => ({
                        ...prev,
                        [certificate.id]: true,
                      }))
                    }
                  >
                    <Page
                      pageNumber={1}
                      width={250}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                    />
                  </Document>
                ) : (
                  <img src={certificate.image} alt={certificate.title} />
                )}
              </div>
              <h3 className="certificate-card__title">{certificate.title}</h3>
            </div>
          );
        })}
      </div>

      {/* MODAL */}
      {selectedPdf && (
        <div className="certificate-modal" onClick={() => setSelectedPdf(null)}>
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

            {!useFallback ? (
              <div className="pdf-viewer">
                <Document
                  file={{ url: selectedPdf, }}
                  onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                  onLoadError={handlePdfLoadError}
                  loading={<div className="pdf-loading">Loading PDF, please wait...</div>}
                >
                  <Page
                    pageNumber={pageNumber}
                    width={Math.min(window.innerWidth * 0.8, 900)}
                  />
                </Document>

                {pdfError && !useFallback && (
                  <div className="pdf-error">
                    <p>❌ Failed to load PDF: {pdfError}</p>
                    <button onClick={() => setUseFallback(true)}>
                      Open in browser instead
                    </button>
                  </div>
                )}

                {numPages && numPages > 1 && !pdfError && (
                  <div className="pdf-controls">
                    <button
                      onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
                      disabled={pageNumber <= 1}
                    >
                      Previous
                    </button>
                    <span>
                      Page {pageNumber} of {numPages}
                    </span>
                    <button
                      onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
                      disabled={pageNumber >= numPages}
                    >
                      Next
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="fallback-viewer">
                <p>
                  The built‑in viewer could not display this PDF on your device.
                </p>
                <a
                  href={selectedPdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fallback-link"
                >
                  📄 Open PDF in new tab
                </a>
                <a href={selectedPdf} download className="fallback-link">
                  ⬇️ Download PDF
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;