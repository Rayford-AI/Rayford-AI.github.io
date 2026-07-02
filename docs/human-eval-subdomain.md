# Human Evaluation Subdomain

Project name: Human Evaluation of Post-disaster Street-view Generation

Public hostname: https://human-eval.rayford-ai.com/

Current origin service: http://149.165.159.154:8890/

## Recommended Setup

Use Cloudflare Tunnel. The origin currently serves the app on port `8890`, while
ports `80` and `443` are not open on the origin. A tunnel avoids opening inbound
web ports and maps the public hostname to the local service.

Current Cloudflare Tunnel route:

```text
Hostname: human-eval.rayford-ai.com
Service:  http://149.165.159.154:8890
```

This route is live through a `cloudflared` LaunchAgent on Yifan's Mac. For a
durable production setup, install and run `cloudflared` on the server that hosts
the Express app, then change the tunnel service to:

```text
Hostname: human-eval.rayford-ai.com
Service:  http://localhost:8890
```

The app posts responses to `/api/disaster`, so keep the hostname mapped to the
same service rather than copying only the static files to GitHub Pages.

## Cloudflare Dashboard Steps

1. Open Cloudflare Zero Trust.
2. Go to Networks, then Tunnels.
3. Create or select a tunnel for the origin server.
4. Add a public hostname.
5. Set `human-eval` as the subdomain under `rayford-ai.com`.
6. Set the service URL to `http://localhost:8890`.
7. Save the route and keep `cloudflared` running as a system service.

Cloudflare will create the tunnel DNS record automatically. It normally points
`human-eval.rayford-ai.com` to a `<UUID>.cfargotunnel.com` target.

## Reverse Proxy Alternative

If the origin can open ports `80` and `443`, Caddy can serve the public
hostname directly:

```caddyfile
human-eval.rayford-ai.com {
    reverse_proxy 127.0.0.1:8890
}
```

Then create this DNS record in Cloudflare:

```text
Type: A
Name: human-eval
Target: 149.165.159.154
Proxy status: Proxied after HTTPS works at the origin
```

Do not rely on a direct proxied Cloudflare DNS record to port `8890`. Cloudflare
only proxies a fixed set of HTTP and HTTPS ports by default.

## Verification

After the tunnel or reverse proxy is live, check:

```bash
curl -I https://human-eval.rayford-ai.com/
curl -I https://human-eval.rayford-ai.com/config/disasterGen.js
curl -sS https://human-eval.rayford-ai.com/ | rg "Human Evaluation of Post-disaster Street-view Generation|/api/disaster"
```

Expected result: the root page returns `200`, the config file returns `200`, and
the HTML still posts to `/api/disaster` under the same hostname.
