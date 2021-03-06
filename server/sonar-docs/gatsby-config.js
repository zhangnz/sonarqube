/*
 * SonarQube
 * Copyright (C) 2009-2018 SonarSource SA
 * mailto:info AT sonarsource DOT com
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 3 of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */
module.exports = {
  siteMetadata: {
    title: 'SonarQube Documentation'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'src', path: `${__dirname}/src/` }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-typography',
      options: { pathToConfigModule: `src/utils/typography` }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                danger: 'alert alert-danger',
                warning: 'alert alert-warning',
                info: 'alert alert-info',
                success: 'alert alert-success',
                collapse: 'collapse'
              }
            }
          }
        ]
      }
    },
    'gatsby-plugin-glamor'
  ]
};
