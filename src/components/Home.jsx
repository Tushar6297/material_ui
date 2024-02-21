import React from 'react'

export default function Home() {
  return (
    <>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
        <div class="carousel-item active ">
            <img src="https://media.gq.com/photos/63eba1b2275d2fef78a425c2/master/pass/nike-running-shoes-streakfly-invincible.jpg" class="d-block w-100" className='img-fluid'  />
          </div>
          
        

          <div class="carousel-item ">
            <img src="https://i.pinimg.com/originals/fa/45/96/fa4596ad9a9d39901eeb455ed4f74e44.jpg" class="d-block w-100" className='img-fluid'alt="..." />
          </div> 

          <div class="carousel-item ">
            <img src="https://www.flashfootwear.com.pk/wp-content/uploads/2022/05/WEB-BANNER-MEN.jpg" class="d-block w-100" className='img-fluid'  />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>



    </>
  )
}
