module.exports = {
    siteMetadata: {
        title: 'Theia - Cloud and Desktop IDE',
        description: "Theia is an open-source cloud &nbsp; desktop IDE framework implemented in TypeScript."
    },
    plugins: [
        'gatsby-plugin-emotion',
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_self",
                            rel: "nofollow"
                        }
                    }
                ]
            }
        }
    ]
}
