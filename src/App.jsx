import React from 'react'
import Card from './Card'

function App() {
  let data = [
    {
        version:'Free',
        price:0,
        features:[
          'Single User',
          '5GB Storage',
          'Unlimited Public Projects',
          'Community Access',
          'Unlimited Private Projects',
          'Dedicated Phone Support',
          'Free Subdomain',
          'Monthly Status Reports'
        ],
        unavailable: [4, 5, 6, 7]
    },
    {
      version:'Plus',
      price:9,
      features:[
        '5 Users',
        '50GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports'
      ],
      unavailable: [7]
    },
    {
      version:'Pro',
      price:49,
      features:[
        'Unlimited Users',
        '150GB Storage',
        'Unlimited Public Projects',
        'Community Access',
        'Unlimited Private Projects',
        'Dedicated Phone Support',
        'Free Subdomain',
        'Monthly Status Reports'
      ],
      unavailable: []
    }
  ]
  return (
    <>
 
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {
            data.map((e,i)=>{
              return <Card key={i} data={e}/>
            })
          }
        </div>
      </div>
    </section>

    </>
  )
}

export default App
