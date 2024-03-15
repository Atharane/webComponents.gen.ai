export const copyGeneratedSiteCode = () => {
  const sitePreview = document.getElementById('site-preview');
  const sitePreviewInnerHTML = sitePreview?.innerHTML;
  sitePreviewInnerHTML && navigator.clipboard.writeText(sitePreviewInnerHTML);
  return sitePreviewInnerHTML;
};

export const openInCodeSandbox = () => {
  (async () => {
    const response = await fetch(
      'https://codesandbox.io/api/v1/sandboxes/define?json',
      {
        body: JSON.stringify({
          files: {
            'index.html': {
              content: `<html>
                          <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <script src="https://cdn.tailwindcss.com"></script>
                          </head>
                          <body class="bg-slate-900">
                            ${copyGeneratedSiteCode()}
                          </body>
                          </html>`
            }
          }
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }
    );
    const data = await response.json();
    const sandbox_id = data.sandbox_id;
    const sandBoxUrl = `https://codesandbox.io/s/${sandbox_id}`;
    window.open(sandBoxUrl, '_blank');
  })();
};
