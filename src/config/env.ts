export function envOr(name: string, fallback: string): string {
    return process.env[name] || fallback;
}
