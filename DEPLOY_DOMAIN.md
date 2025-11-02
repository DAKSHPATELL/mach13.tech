# mach13.tech Domain Cutover

Follow these steps after the Vercel project is ready.

1. Open the Vercel project → **Settings → Domains** and add both `mach13.tech` and `www.mach13.tech`.
2. Choose one DNS strategy:
   - **Option A — Delegate to Vercel**: update the registrar nameservers to `ns1.vercel-dns.com`, `ns2.vercel-dns.com`, `ns3.vercel-dns.com`, and `ns4.vercel-dns.com`.
   - **Option B — Keep current DNS**:
     - Create a CNAME record for `www` pointing to `cname.vercel-dns.com`.
     - Create an ALIAS/ANAME (or CNAME if your DNS host allows) for the root `@` pointing to `cname.vercel-dns.com`.
3. Back in Vercel, mark `mach13.tech` as the primary domain so `www` redirects to the apex.
4. Redeploy the production branch or trigger a redeploy to issue certificates.
5. Verify HTTPS for both `https://mach13.tech` and `https://www.mach13.tech` once DNS propagates.
