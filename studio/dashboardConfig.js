export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63486bfdd5f8d90073bcaff3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-studio',
                  apiId: '5f9a77bf-2205-4f53-816b-a0acfd601c50'
                },
                {
                  buildHookId: '63486bfed5f8d9009bbcae72',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-web-pjbikxjd',
                  apiId: '7d106f81-e8f4-47dd-b44f-6d6ffa1a342d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/sferg989/sanity-gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-web-pjbikxjd.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
