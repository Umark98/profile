import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';

const baseUrl = process.env.PORTFOLIO_TEST_URL || 'http://localhost:4000';

test('initial response includes the complete portfolio without client-side startup timers', async () => {
  let html;
  if (process.env.PORTFOLIO_BUILD_HTML) {
    html = await readFile(process.env.PORTFOLIO_BUILD_HTML, 'utf8');
  } else {
    const response = await fetch(baseUrl);
    assert.equal(response.status, 200);
    html = await response.text();
  }
  const markup = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');

  for (const section of ['aboutSection', 'WhereIhaveWorkedSection', 'SomethingIveBuiltSection', 'GetInTouchSection']) {
    assert.ok(markup.includes(`id="${section}"`), `${section} must be present in the initial HTML, including when JavaScript is unavailable`);
  }
});
