import React from 'react'

const Banner = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-lg-10">

        <div className="row justify-content-center banner-intro-text">
          <h2 className="fw-regular">Optez pour la mobilité tout confort</h2>
          <h1 className="fw-bold text-primary">Le prix le plus juste</h1>
          <h4 className="fw-regular">La sécurité dans le service, apprecier le trajet</h4>
        </div>

        <div className="row banner-form">
          <form action="#" className="banner-form-order-action">
            <div className="row nownarow row-30">
              <div className="col-md-6">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <input type="text" name="" id="" placeholder="Départ:" />
              </div>
              <div className="col-md-6">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <input type="text" name="" id="" placeholder="Arrivé:"/>
              </div>
              <div className="col-md-6">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <input type="text" name="" id="" placeholder="Phone number:"/>
              </div>
              <div className="col-md-6">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
                <input type="text" name="" id="" placeholder="Time:"/>
              </div>
              <div className="col-md-6">
                <i class="fa fa-car" aria-hidden="true"></i>
                <input type="text" name="" id="" placeholder="Car type:"/>
              </div>
              <div className="col-md-6">
                <i class="fa fa-credit-card" aria-hidden="true"></i>
                <input type="text" name="" id="" placeholder="Payment method"/>
              </div>
            </div>

            <div className="text-center button-action">
              <button type="submit" className="button button-primary">Reservez un taxi</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Banner