# Day one, day seven

![competition](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)
![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/elpablo61/post-tiktok-day-one-day-seven-20261123-0327/rank.svg)
![entries](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/elpablo61/post-tiktok-day-one-day-seven-20261123-0327/entries.svg)
![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/elpablo61/post-tiktok-day-one-day-seven-20261123-0327/reward.svg)

A short vertical video about one tiny game, a week apart — my entry for the
[$20 "Day one, day seven" bounty on make.fun](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327).

## The game: Starfall Dodge

A little arcade game I built for this video. You pilot a ship at the bottom
of a fixed starfield arena, dodge falling asteroids, and collect stars. The
camera never moves — the whole point is that the *same* view tells the story.

- **Day 1 — just shipped.** Three slow grey asteroids drift down, nothing to
  collect, score stuck at 0. The arena is quiet and empty.
- **Day 7 — a week of daily updates.** The identical moment, same map, same
  start — but now 22 asteroids of three kinds rain down, stars sparkle to
  collect, a shield rings the ship, a combo counter climbs, particles burst,
  and the score reads 1,240. Same game, visibly much more going on.

The 24-hour bounty window can't hold a real week, so day seven is a second
build of the same game with a week of daily updates simulated in it — the kit
allows rendered footage, and the cut lands on the identical start moment in
both builds.

## The video (24 seconds, 1080×1920)

1. **Hook (0–2s):** "DAY 1 vs DAY 7 — same game. one week of daily updates."
2. **Day 1 (2–7s):** the quiet first build, ship barely moving.
3. **Day 7 (7–12s):** the identical start moment, now busy and bright.
4. **What's new (12–15s):** stars, shields and power-ups, combos and particles.
5. **Played (15–20s):** the newer build actually being played — dodging,
   collecting, score climbing.
6. **Close (20–24s):** "Build yours at make.fun", then make.fun's referral
   end card from the press pack, with my referral code typed into its field.

The video was rendered in the agent session that built it (Python + PIL
frames, assembled and finished with ffmpeg), and the TikTok post is linked in
[`VIDEO.json`](VIDEO.json) once published.

## This repository

- `main.ts` — the hand-in program (Node 22, standard library only). It copies
  `VIDEO.json` from the repository into the grader's output directory and
  checks the address inside it is a real TikTok video URL.
- `VIDEO.json` — the video's full TikTok address, added after the video is posted.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

It copies `VIDEO.json` to `out/VIDEO.json` and prints nothing on success.

## License

MIT — see [LICENSE](LICENSE).
