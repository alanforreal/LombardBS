Local TLS certs — notes

Purpose
- These files are for local development only. Keep any real private keys out of source control.

Templates
- `localhost.pem.template` and `localhost-key.pem.template` are simple templates you can edit and swap in by removing the `.template` suffix after generating the real files.

Dev server behavior
- The dev server will attempt to use `certs/localhost.pem` and `certs/localhost-key.pem` for HTTPS. If these files are missing, Vite will start in HTTP mode and print a warning. Generate certs with `mkcert` to enable HTTPS locally.

Preferred local generation (mkcert)
1. Install mkcert (https://github.com/FiloSottile/mkcert)
2. Generate certs in this folder:
   mkcert -key-file certs/localhost-key.pem -cert-file certs/localhost.pem localhost 127.0.0.1 ::1
3. Ensure permissions are private:
   chmod 600 certs/localhost-key.pem certs/localhost.pem

Alternative (openssl, not trusted by browsers without CA):
1. Generate a key:
   openssl genrsa -out certs/localhost-key.pem 2048
2. Generate a self-signed cert:
   openssl req -new -x509 -sha256 -key certs/localhost-key.pem -out certs/localhost.pem -days 365 -subj "/CN=localhost"

Security notes
- Never commit `certs/localhost-key.pem` to git. This repo already has `certs/` in `.gitignore`.
- If a real private key was committed in the past, revoke and rotate it immediately and remove from history with `git filter-repo` or BFG.
- Use managed TLS for production (Vercel/Netlify/Cloudflare/Let’s Encrypt).

If you'd like, I can:
- Replace these templates with actual generated certs (if you confirm), or
- Add a script to auto-generate dev certs using `mkcert` when available, or
- Securely upload your generated certs to a secrets manager (if you provide access).
