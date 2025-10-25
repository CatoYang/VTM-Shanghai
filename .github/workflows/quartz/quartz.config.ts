import { QuartzConfig } from "quartz/cfg"
import * as Plugin from "quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "VTM - Shanghai",
    enableSPA: true,
    enablePopovers: true,
    // IMPORTANT for project pages (no protocol, include repo subpath):
    // Resulting site URL will be https://catoyang.github.io/VTM-Shanghai
    baseUrl: "catoyang.github.io/VTM-Shanghai",
    // Don’t publish Obsidian internals / large binary folders:
    ignorePatterns: [
      "**/.git/**",
        "**/.github/**",      // keep CI files out of published site
        "**/.obsidian/**",    // Obsidian internals
        "**/node_modules/**",
        "**/.DS_Store",
        "**/Thumbs.db",
        "**/*.psd",           // common heavy binaries you don’t want indexed
        "**/*.ai",
        "**/*.zip",
    ],
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.ObsidianFlavoredMarkdown(),
      Plugin.Description(),
      Plugin.TableOfContents(),
      Plugin.CreatedModifiedDate(),
      Plugin.SyntaxHighlighting(),
    ],
    // By default Quartz removes notes with `draft: true`
    filters: [Plugin.RemoveDrafts()],
    // If you prefer “only publish when I say so”, switch to:
    // filters: [Plugin.ExplicitPublish()],
    emitters: [
      Plugin.ContentPage(),
      Plugin.Assets(),
      Plugin.TagPage(),
      Plugin.FolderPage(),
      Plugin.RSS(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
