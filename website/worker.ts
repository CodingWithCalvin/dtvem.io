const REDIRECTS: Record<string, string> = {
  '/install.ps1': 'https://github.com/CodingWithCalvin/dtvem.cli/releases/latest/download/install.ps1',
  '/install.sh': 'https://github.com/CodingWithCalvin/dtvem.cli/releases/latest/download/install.sh',
  '/uninstall.ps1': 'https://github.com/CodingWithCalvin/dtvem.cli/releases/latest/download/uninstall.ps1',
  '/uninstall.sh': 'https://github.com/CodingWithCalvin/dtvem.cli/releases/latest/download/uninstall.sh',
};

export default {
  async fetch(request: Request, env: { ASSETS: { fetch: typeof fetch } }): Promise<Response> {
    const url = new URL(request.url);

    // Check for redirects
    const redirectTarget = REDIRECTS[url.pathname];
    if (redirectTarget) {
      return Response.redirect(redirectTarget, 302);
    }

    // Fall through to static assets
    return env.ASSETS.fetch(request);
  },
};
