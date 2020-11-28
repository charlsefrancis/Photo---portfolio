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
                  buildHookId: '5fc20b6a9ad37bfd6f257d52',
                  title: 'Sanity Studio',
                  name: 'photo-portfolio-studio',
                  apiId: '3e27dcb0-2ceb-4767-bf3a-2cda51878340'
                },
                {
                  buildHookId: '5fc20b6a2e5496c986405227',
                  title: 'Landing pages Website',
                  name: 'photo-portfolio-web',
                  apiId: '4c927197-2c89-4346-82e0-62d54389d969'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/charlsefrancis/Photo---portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://photo-portfolio-web.netlify.app', category: 'apps'}
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
