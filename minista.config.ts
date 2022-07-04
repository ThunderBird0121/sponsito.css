import { defineConfig } from 'minista';

export default defineConfig({
  base: '/shokika.css/', // string
  // Absolute URL pathname, e.g. "/foo/"
  // Full URL, e.g. "https://foo.com/"
  // Empty string or "./" (for embedded deployment)
  // https://ja.vitejs.dev/config/shared-options.html#base
  public: 'public', // string
  out: 'dist', // string
  root: {
    srcDir: 'src', // string
    srcName: 'root', // string
    srcExt: ['tsx', 'jsx'], // string[]
  },
  pages: {
    srcDir: 'src/pages', // string
    srcExt: ['tsx', 'jsx', 'md', 'mdx'], // string[]
  },
  assets: {
    entry: '',
    // | string
    // | string[]
    // | { [key: string]: string }
    // | {
    //      name?: string
    //      input: string
    //      insertPages: string | string[] | { include: string[]; exclude?: string[] }
    //   }[]
    outDir: 'assets', // string
    outName: '[name]', // string
    bundle: {
      outName: 'bundle', // string
    },
    partial: {
      useSplitPerPage: false, // boolean
      usePreact: false, // boolean
      useIntersectionObserver: true, // boolean
      outName: 'partial', // string
      rootAttrSuffix: 'partial-hydration', // string
      rootValuePrefix: 'ph', // string
      rootDOMElement: 'div', // "div" | "span"
      rootStyle: { display: 'contents' }, // React.CSSProperties
      intersectionObserverOptions: {
        root: null, // Element | null
        rootMargin: '0px', // string
        thresholds: [1], // ReadonlyArray<number>
      },
    },
    images: {
      outDir: 'assets/images', // string
      outName: '[name]', // string
    },
    fonts: {
      outDir: 'assets/fonts', // string
      outName: '[name]', // string
    },
    svgr: {
      svgrOptions: {}, // https://react-svgr.com/docs/options/
    },
    icons: {
      useSprite: true, // boolean
      srcDir: 'src/assets/icons', // string
      outDir: 'assets/images', // string
      outName: 'icons', // string
      svgstoreOptions: {
        cleanSymbols: ['fill', 'stroke', 'stroke-linejoin', 'stroke-width'],
      }, // https://github.com/svgstore/svgstore#svgstore-options
    },
    download: {
      useRemote: false, // boolean
      remoteUrl: ['https://', 'http://'], // string[]
      remoteName: 'remote-[index]', // string
      outDir: 'assets/images', // string
    },
  },
  vite: {}, // https://ja.vitejs.dev/config/
  resolve: {
    alias: [], // { [key: string]: string } | { find: string, replacement: string }[]
  },
  css: {
    modules: {
      cache: true,
      scopeBehaviour: 'local',
      globalModulePaths: [],
      generateScopedName: undefined,
      hashPrefix: '',
      localsConvention: 'camelCaseOnly',
    }, // https://ja.vitejs.dev/config/#css-modules
    preprocessorOptions: {
      scss: {},
      less: {},
      stylus: {},
    }, // https://ja.vitejs.dev/config/#css-preprocessoroptions
  },
  markdown: {
    syntaxHighlighter: 'highlight', // "highlight" | "none"
    highlightOptions: {}, // https://github.com/rehypejs/rehype-highlight#options
    mdxOptions: {
      remarkPlugins: [], // https://mdxjs.com/packages/mdx/#optionsremarkplugins
      rehypePlugins: [], // https://mdxjs.com/packages/mdx/#optionsrehypeplugins
    },
  },
  beautify: {
    useHtml: false, // boolean
    useAssets: false, // boolean
    htmlOptions: {
      indent_size: 2,
      max_preserve_newlines: 0,
      indent_inner_html: true,
      extra_liners: [],
      inline: ['span', 'strong', 'b', 'small', 'del', 's', 'code', 'br', 'wbr'],
    }, // https://github.com/beautify-web/js-beautify#css--html
    cssOptions: {}, // https://github.com/beautify-web/js-beautify#css--html
    jsOptions: {}, // https://github.com/beautify-web/js-beautify#options
  },
});
