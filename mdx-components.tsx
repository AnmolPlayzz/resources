import type { MDXComponents } from 'mdx/types'
import Image, { ImageProps } from 'next/image'
import './mdx.css'  // Import the CSS file globally

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // Headings with no inline styling, use CSS class
        h1: ({ children }) => <h1>{children}</h1>,
        h2: ({ children }) => <h2>{children}</h2>,
        h3: ({ children }) => <h3>{children}</h3>,

        // Paragraph with no inline styling
        p: ({ children }) => <p>{children}</p>,

        // Lists with no inline styling
        ul: ({ children }) => <ul>{children}</ul>,
        ol: ({ children }) => <ol>{children}</ol>,
        li: ({ children }) => <li>{children}</li>,

        // Links with no inline styling
        a: ({ children, href }) => <a href={href}>{children}</a>,

        // Images with no inline styling
        img: (props) => (
            <Image
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} // Optional for specific Image styles
                {...(props as ImageProps)}
            />
        ),

        // Code blocks and inline code with no inline styling
        pre: ({ children }) => <pre>{children}</pre>,
        code: ({ children }) => <code>{children}</code>,

        // Blockquotes with no inline styling
        blockquote: ({ children }) => <blockquote>{children}</blockquote>,

        // Horizontal rule with no inline styling
        hr: () => <hr />,

        // Table of contents (optional if you have custom logic for it)
        toc: ({ children }) => <div className="toc">{children}</div>,

        // Merge additional components passed to the function
        ...components,
    }
}
