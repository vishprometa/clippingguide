---
title: 'CapCut captions not working: common fixes'
description: 'Separate caption-generation, visibility, and export problems in CapCut. Check a small sample, narrow the cause, and preserve your project while troubleshooting.'
topic: editing
level: Beginner
published: '2026-10-06'
updated: '2026-10-06'
answer: 'First identify whether CapCut failed to generate caption text, generated text you cannot see, or lost captions during export. For generation failures, check the speech track, language, connection, and current app version. For display or export failures, inspect the existing caption layer and test a short exported sample before rebuilding the project.'
image: editing
featured: false
order: 14
sources:
  - title: CapCut official auto-caption troubleshooting
    url: https://www.capcut.com/help/auto-captions
  - title: CapCut caption workflow across web, mobile, and desktop
    url: https://www.capcut.com/resource/how-to-add-subtitle-in-capcut
---

## Identify which part failed

“Captions not working” describes several different problems. A generation failure needs a different check from a caption that exists but sits outside the picture. Before changing settings, inspect what the project already contains.

| What you observe                                          | Start here                                    |
| --------------------------------------------------------- | --------------------------------------------- |
| No caption text was created                               | Check speech detection and generation         |
| Text exists but is invisible or incomplete                | Inspect placement, timing, and style          |
| Captions appear in the editor but disappear from the file | Compare the exported sample with the timeline |

Save the project before troubleshooting. Work on a copy when testing large changes, and keep the original source file. This lets you compare a repair with the earlier version rather than starting over each time.

## Use a small control clip

Choose a short part of the recording with one speaker and clear speech. Test that section in a separate working project using a plain caption style. This is a diagnostic test, not a claim that any particular clip length guarantees success.

If the simple test works, compare it with the original project. Look at the audio source, language setting, overlays, and caption styling. If it fails too, changing a complex animation in the original is unlikely to solve a basic generation problem.

## If no captions were generated

CapCut's official help identifies unclear speech, an incorrect or unsupported language selection, an unstable connection, missing or muted audio, and outdated software as possible causes of generation failures.

Listen to the section you selected. Confirm that the speech you want captioned is present and audible in that working section. When there are several audio tracks, make sure the generation step is operating on the speech you intend to transcribe.

Use the language actually spoken in the clip. A recording that changes languages or contains overlapping voices can need closer review. A caption generator should not be expected to infer missing words from silent footage.

The official web and desktop workflow uses the caption controls and Auto Captions; mobile exposes captions in its editing controls. Exact layouts can change, so follow the interface for your current version. Check your connection and save your work before restarting or refreshing. Use the official store or vendor distribution when updating the app.

## If text exists but you cannot see it

Inspect a frame where the caption should appear. Check whether the text is inside the canvas, large enough to read, and contrasted against the picture. Review the caption's start and end times against the actual speech.

Temporarily test a plain readable style in your working copy. If that version is visible, reintroduce styling one element at a time. This comparison can help distinguish a transcription problem from a visual treatment that hides otherwise valid text.

If words disappear quickly, inspect the timing and line breaks before regenerating the whole transcript. If a line is cut off, check its position and layout at normal phone size. Avoid fixing a readable-text problem by adding more animation.

## If the exported file loses captions

Export a short sample of a section where the captions are visible in the editor. Watch the actual file from the start of the relevant section. Confirm you exported the intended project and version.

Compare the plain caption test with the styled version. Note exactly which change makes the difference. If both samples fail, preserve them along with the app version and export settings so support can investigate a reproducible case.

Do not treat an editor preview as proof that the final file is correct. The [export-settings guide](/guides/vertical-video-export-settings/) and [publishing checklist](/tools/clip-checklist/) cover the final checks.

## If the problem remains

CapCut's help links to its support channel for unresolved cases. Provide the actual error message, your interface and version, whether generation or display failed, and the result of the small control test. Leave private client footage out of a public support post.

A fixed caption workflow still needs an accuracy pass. Correct names, numbers, and specialist words before publishing; use [our caption guide](/guides/video-captions/) for readability and timing.
