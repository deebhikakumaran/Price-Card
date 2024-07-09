import React from 'react'

function Card(props) {
  return (
    <>
        
        <div className="col-lg-4">
            <div className="card mb-5 mb-lg-0">
              <div className="card-body">
                <h5 className="card-title text-muted text-uppercase text-center">{props.data.version}</h5>
                <h6 className="card-price text-center">${props.data.price}<span className="period">/month</span></h6>
                <hr />
                <ul className="fa-ul">
                    {props.data.features.map((feature, i) => (
                        <li key={i} className={props.data.unavailable.includes(i) ? 'text-muted' : ''}>
                            <span className="fa-li"><i className={props.data.unavailable.includes(i) ? 'fas fa-times' : 'fas fa-check'}></i></span>
                            {feature}
                        </li>
                    ))}
                </ul>
                <div className="d-grid">
                  <a href="#" className="btn btn-primary text-uppercase">Button</a>
                </div>
              </div>
            </div>
        </div>

    </>
  )
}

export default Card
