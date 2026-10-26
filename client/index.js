// Node 18+ (built-in fetch). Calls the FastAPI backend.
const BASE = "http://127.0.0.1:8000";

async function main() {
  console.log(await (await fetch(`${BASE}/`)).json());

  const res = await fetch(`${BASE}/items`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Widget", price: 9.99 }),
  });
  console.log("Created:", await res.json());
  console.log("All:", await (await fetch(`${BASE}/items`)).json());
}

main().catch(console.error);
