import React from "react"
import { HighlightRender, HighlightIcon } from "../decorators/Highlight"

export default {
    title: 'Block Content',
    name: 'blockContent',
    type: 'array',
    of: [
        {
            title: 'Block',
            type: 'block',
            // Styles let you set what your user can mark up blocks with. These
            // correspond with HTML tags, but you can set any title or value
            // you want and decide how you want to deal with it where you want to
            // use your content.
            styles: [
                { title: 'Normal', value: 'normal' },
                { title: 'H2', value: 'h2' },
                { title: 'H3', value: 'h3' },
                { title: 'H4', value: 'h4' },
                { title: 'H5', value: 'h5' },
                { title: 'Quote', value: 'blockquote' }
            ],
            lists: [
                { title: 'Bullet', value: 'bullet' },
                { title: 'Numbered', value: 'number' },
            ],
            // Marks let you mark up inline text in the block editor.
            marks: {
                // Decorators usually describe a single property – e.g. a typographic
                // preference or highlighting by editors.
                decorators: [
                    // the first 5 here are the default - we didn't have to include them but I was explicit to better understand what I can
                    { title: 'Strong', value: 'strong' },
                    { title: 'Emphasis', value: 'em' },
                    { title: 'Code', value: 'code' },
                    { title: 'Strikethrough', value: 'strike-through' },
                    { title: 'Underline', value: 'underline' },
                    {
                        title: 'Highlight',
                        value: 'highlight',
                        blockEditor: {
                            icon: HighlightIcon,
                            render: HighlightRender
                        }
                    },
                    // ...alignmentDecorators
                ],
                // Annotations can be any object structure – e.g. a link or a footnote.
                annotations: [
                    {
                        title: 'URL',
                        name: 'link',
                        type: 'object',
                        fields: [
                            {
                                title: 'URL',
                                name: 'href',
                                type: 'url',
                            },
                        ],
                    },
                    // {
                    //     name: 'footnote',
                    //     type: 'object',
                    //     title: 'Footnote',
                    //     fields: [
                    //         {
                    //             name: 'text',
                    //             type: 'array',
                    //             of: [{type: 'block'}]
                    //         }
                    //     ]
                    // }
                ],
            },
        },
        // You can add additional types here. Note that you can't use
        // primitive types such as 'string' and 'number' in the same array
        // as a block type.
        {
            type: 'image',
            options: { hotspot: true },
        },
    ],
}