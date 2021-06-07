export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '60bdda08fde2ef3b945fbed0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-p5ktgafe',
                  apiId: '52dea3de-1c74-46d0-bbc0-4e02332b1345'
                },
                {
                  buildHookId: '60bdda08cdd6763dd64ad96a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1rwk1dvk',
                  apiId: 'b9edf54b-e6ff-488c-8bab-602811e729ee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Bakryu/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1rwk1dvk.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
