const express = require('express');
const fetch = require('node-fetch');
const app = express();

const BASE = 'http://funstatbot.info';

// Helper - forward request
async function proxyGet(url, res) {
  try {
    const r = await fetch(url);
    const data = await r.json();
    // Change developer if exists
    if (data.developer) data.developer = "@Boss_Hcrr";
    if (data.dev) data.dev = "@Boss_Hcrr";
    res.json(data);
  } catch (err) {
    res.json({ status: false, error: "Something went wrong" });
  }
}

// ── TEXT ──
app.get('/api/v1/text/search', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/text/search?${q}`, res);
});

// ── USERS ──
app.get('/api/v1/users/resolve_username', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/users/resolve_username?${q}`, res);
});

app.get('/api/v1/users/reputation', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/users/reputation?${q}`, res);
});

app.get('/api/v1/users/name_usage', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/users/name_usage?${q}`, res);
});

app.get('/api/v1/users/username_usage', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/users/username_usage?${q}`, res);
});

app.get('/api/v1/users/basic_info_by_id', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/users/basic_info_by_id?${q}`, res);
});

app.get('/api/v1/users/:id/gifts_relation', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/users/${req.params.id}/gifts_relation?${q}`, res);
});

app.get('/api/v1/users/:id/stickers', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/users/${req.params.id}/stickers?${q}`, res);
});

app.get('/api/v1/users/:id/common_groups_stat', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/users/${req.params.id}/common_groups_stat?${q}`, res);
});

app.get('/api/v1/users/:id/stats_min', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/users/${req.params.id}/stats_min?${q}`, res);
});

app.get('/api/v1/users/:id/stats', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/users/${req.params.id}/stats?${q}`, res);
});

app.get('/api/v1/users/:id/groups_count', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/users/${req.params.id}/groups_count?${q}`, res);
});

app.get('/api/v1/users/:id/messages', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/users/${req.params.id}/messages?${q}`, res);
});

app.get('/api/v1/users/:id/messages_count', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/users/${req.params.id}/messages_count?${q}`, res);
});

app.get('/api/v1/users/:id/groups', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/users/${req.params.id}/groups?${q}`, res);
});

app.get('/api/v1/users/:id/names', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/users/${req.params.id}/names?${q}`, res);
});

app.get('/api/v1/users/:id/usernames', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/users/${req.params.id}/usernames?${q}`, res);
});

// ── GROUPS ──
app.get('/api/v1/groups/common_groups', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/groups/common_groups?${q}`, res);
});

app.get('/api/v1/groups/:id', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/groups/${req.params.id}?${q}`, res);
});

app.get('/api/v1/groups/:id/members', (req, res) => {
  const q = new URLSearchParams(req.query).toString();
  proxyGet(`${BASE}/api/v1/groups/${req.params.id}/members?${q}`, res);
});

app.get('/', (req, res) => {
  res.send('Funstat Proxy API Running! ✅');
});

app.listen(3000);
