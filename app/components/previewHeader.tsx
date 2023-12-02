const PreviewHeader = () => {
  const copyGeneratedSiteCode = () => {
    const sitePreview = document.getElementById("site-preview")
    const sitePreviewInnerHTML = sitePreview?.innerHTML
    console.log(`~ sitePreviewInnerHTML:`, sitePreviewInnerHTML)
    sitePreviewInnerHTML && navigator.clipboard.writeText(sitePreviewInnerHTML)
  }

  return (
    <div className="preview-header bg-slate-200/20 rounded-md p-2 flex gap-2">
      <button
        onClick={copyGeneratedSiteCode}
        className="p-2 bg-blue-600 rounded-sm"
      >
        Copy Code
      </button>
      <button className="p-2 bg-blue-600 rounded-sm">
        Open in CodeSandbox
      </button>
    </div>
  )
}

export default PreviewHeader
