import React from 'react';
import { useForm } from 'react-hook-form';
import "../style/Shop.css";
import InputMask from 'react-input-mask';
import Photo from "../assets/image_11-removebg-preview.png"
import Photo1 from "../assets/image_16-removebg-preview.png"
import Photo2 from "../assets/image_15-removebg-preview.png"
import Photo3 from "../assets/image_17-removebg-preview.png"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Shop() {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
    toast.success('Order muvaffaqiyatli qabul qilindi!')
  };

  const products = [
    {
      name: "Barberton Daisy",
      SKU: "1995751877966",
      quantity: 2,
      price: "$238.00",

      name1: 'Blushing Bromeliad',
      SKU1: '19957518757065',
      quantity1: '6',
      price1: "$834.00",

      name2: 'Aluminum Plant',
      SKU2: '1995751877786',
      quantity2: '9',
      price2: "$1,611.00",
    }
  ];
   
  const orderItems = [
    {
      Subtotal: '$2,683.00',
      CouponDiscount: '(-) 00.00',
      Shiping: '$16.00'
    }
  ]

  return (
    <div>
      <div style={{display: 'flex'}} className='container'>
        <div className='section1'>
          <div className='section1-text'>
            <h1 className='section1-title'><span className='sec1-span'>Home</span> / Shop / Checkout</h1>
            <h1 className='section-inform'>Billing Address</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='first-last'>
              <div className='first'>
  <label className={`firstName1 ${errors.firstName ? 'text-red-500' : ''}`} htmlFor="firstName">
    First Name <span className='required'>*</span> <br />
    <input
      type="text"
      className={`firstName ${errors.firstName ? 'border-red-500' : ''}`}
      {...register('firstName', { required: true, pattern: /^[A-Za-z]+$/i })}
      aria-invalid={errors.firstName ? 'true' : 'false'}
    />
    {errors.firstName && errors.firstName.type === "required" && <span role="alert" className="error-text">This is a required field</span>}
    {errors.firstName && errors.firstName.type === "pattern" && <span role="alert" className="error-text">Iltimos, son kiritmang</span>}
  </label>
</div>
<div className='last'>
  <label className={`lastName1 ${errors.lastName ? 'text-red-500' : ''}`} htmlFor="lastName">
    Last Name <span className='required'>*</span> <br />
    <input
      type="text"
      className={`lastName ${errors.lastName ? 'border-red-500' : ''}`}
      {...register('lastName', { required: true, pattern: /^[A-Za-z]+$/i })}
      aria-invalid={errors.lastName ? 'true' : 'false'}
    />
    {errors.lastName && errors.lastName.type === "required" && <span role="alert" className="error-text">This is a required field</span>}
    {errors.lastName && errors.lastName.type === "pattern" && <span role="alert" className="error-text">Iltimos, son kiritmang</span>}
  </label>
</div>
              </div>

              <div className='country'>
                <div className='country-region'>
                  <label htmlFor="country">
                    Country <span className='required'>*</span><br />
                    <select
                      className={`custom-select ${errors.country ? 'border-red-500' : ''}`}
                      id="country"
                      {...register('country', { required: true })}
                      aria-invalid={errors.country ? 'true' : 'false'}
                    >
                      <option disabled className='country-option' value="country1">Select a country / region</option>
                      <option className='country-option' value="country2">Uzbekiston buyuk va rivojlangan davlat</option>
                    </select>
                    {errors.country && <span role="alert" className="error-text">This is a required field</span>}
                  </label>
                </div>

                <div className='city'>
                  <label className={`city-label ${errors.city ? 'text-red-500' : ''}`} htmlFor="city">
                    Town / City <span className='required'>*</span><br />
                    <input
                      type="text"
                      className={`town-city ${errors.city ? 'border-red-500' : ''}`}
                      {...register('city', { required: true })}
                      aria-invalid={errors.city ? 'true' : 'false'}
                    />
                    {errors.city && <span role="alert" className="error-text">This is a required field</span>}
                  </label>
                </div>
              </div>

              <div style={{ display: 'flex' }} className='adress'>
              <div className='street-number'>
  <label>
    Street Address <span className='required'>*</span><br />
    <InputMask
      mask="99/99/99"
      maskChar={null}
      className={`street-input ${errors.streetAddress ? 'border-red-500' : ''}`}
      placeholder='House number and street name'
      {...register('streetAddress', { required: true })}
      aria-invalid={errors.streetAddress ? 'true' : 'false'}
    />
    {errors.streetAddress && <span role="alert" className="error-text">This is a required field</span>}
  </label>
</div>

                <div className='apartment'>
                  <input
                    type="text"
                    className='apartment-input'
                    placeholder='Appartment, suite, unit, etc. (optional)'
                    {...register('apartment')}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }} className='state'>
                <div className='shahar'>
                  <label>
                    State <span className='required'>*</span><br />
                    <select
  className={`useCity ${errors.state ? 'border-red-500' : ''}`}
  {...register('state', { required: true })}
  aria-invalid={errors.state ? 'true' : 'false'}
  onClick={() => setValue('state', '')}
>
  <option value="">Select a state</option>
  <option value="Toshkent viloyati">Toshkent viloyati</option>
  <option value="Toshkent shahri">Toshkent shahri</option>
<option value="Surxondaryo viloyati">Surxondaryo viloyati</option>
<option value="Sirdaryo viloyati">Sirdaryo viloyati</option>
<option value="Samarqand ">Samarqand </option>
<option value="Qashqadaryo ">Qashqadaryo </option>
<option value="Navoiy ">Navoiy </option>
<option value="Namangan ">Namangan </option>
<option value="Xorazm ">Xorazm </option>
<option value="Jizzax ">Jizzax </option>
<option value="Fargʻona ">Fargʻona </option>
<option value="Buxoro">Buxoro</option>
<option value="Andijon ">Andijon </option>
</select>

                    {errors.state && <span role="alert" className="error-text">This is a required field</span>}
                  </label>
                </div>
                <div className='zip'>
  <label>
    Zip <span className='required'>*</span>
    <br />
    <input
      type="file"
      accept=".zip"
      className={`zip-input ${errors.zip ? 'border-red-500' : ''}`}
      {...register('zip', { required: true })}
      aria-invalid={errors.zip ? 'true' : 'false'}
    />
    {errors.zip && <span role="alert" className="error-text">This is a required field</span>}
  </label>
</div>
              </div>

              <div style={{ display: 'flex', gap: '20px' }} className='phone-email'>
                <div className='email'>
                  <label>
                    Email address <span className='required'>*</span><br />
                    <input
                      type="email"
                      className={`email-input ${errors.email ? 'border-red-500' : ''}`}
                      {...register('email', { required: true })}
                      aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && <span role="alert" className="error-text">This is a required field</span>}
                  </label>
                </div>
                <div className='phone'>
  <label>
    Phone Number <span className='required'>*</span><br />
    <InputMask
      mask="+\9\96 999 999-99-99"
      maskChar={null}
      className={`phone-input ${errors.phoneNumber ? 'border-red-500' : ''}`}
      {...register('phoneNumber', { required: true })}
      aria-invalid={errors.phoneNumber ? 'true' : 'false'}
    />
    {errors.phoneNumber && <span role="alert" className="error-text">This is a required field</span>}
  </label>
</div>
              </div>

              <div className='order-notes'>
                <label>
                  Order notes (optional) <br />
                  <textarea {...register('orderNotes')} className='notes-input' rows='4' cols='50'></textarea>
                </label>
              </div>
            </form>
            <ToastContainer position="top-right" autoClose={3000} />
          </div>
        </div>

        <div className='section2'>
            <div className='section2-text'>
              <h1 className='sction2_title'>Your Order</h1>
              <div className='item'>
              <h1 className='sec2-texts'>Products</h1>
              <h1 className='item1'>Subtotal</h1>
              </div>
            </div>
            <span className='line'></span>

            <div className='boxes'>
            {products.map((product, index) => (    
    <div key={index} className='box1'>
     <img className='box1-image' src={Photo} alt="" />
      <h2 className='box-1title'>{product.name}</h2>
      <p className='box1-desc'>SKU: {product.SKU}</p>
      <p className='box1-quantity'>( x {product.quantity})</p>
      <p className='box1-price'>{product.price}</p>
    </div>
  ))}

  {products.map((shopping, index) => (
              
              <div key={index} className='box1'>
               <img className='box1-image' src={Photo2} alt="" />
                <h2 className='box-title1'>{shopping.name1}</h2>
                <p className='box1-desc'>SKU: {shopping.SKU1}</p>
                <p className='box1-quantity'>( x {shopping.quantity1})</p>
                <p className='box1-price'>{shopping.price1}</p>
              </div>
            ))}
            {products.map((shopping, index) => (
              
              <div key={index} className='box1'>
               <img className='box1-image' src={Photo1} alt="" />
                <h2 className='box-title1'>{shopping.name2}</h2>
                <p className='box1-desc'>SKU: {shopping.SKU2}</p>
                <p className='box1-quantity'>( x {shopping.quantity2})</p>
                <p className='box1-price'>{shopping.price2}</p>
              </div>
            ))}
            <h1 className='box2-title'>Have a coupon code? <span className='box2-span'>Click here</span></h1>

            {orderItems.map((orderItems, index) => (
              <div key={index} className='box2'>
                <h1 className='box2-title1'><span className='box2-span1'>Subtotal</span>{orderItems.Subtotal}</h1>
                <h1 className='box2-title2'><span className='box2-span2'>CouponDiscount</span> {orderItems.CouponDiscount}</h1>
                <h1 className='box2-title3'><span className='box2-span3'>Shiping</span> {orderItems.Shiping}</h1>
              </div>
            ))}
            <h2 className='charge'>View shipping charge</h2>
            <span className='line'></span>
            </div>

            <div className='total'>
              <div className='total-text'>
              <h1 className='title'>Total</h1>
                <h1 className='text'>$2,699.00</h1>
              </div>
              <div className='total-inputs'>
              <h1 className='payment-title'>Payment Method</h1>
              <label className={`input-radio1 ${errors.paymentMethod ? 'border-red-500' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="creditCard"
                  defaultChecked={true}
                  {...register('paymentMethod', { required: true })}
                  onClick={() => setPaymentMethod('creditCard')}
                />
                <img src={Photo3} alt="" className='payment-span' />
              </label>
              <label className={`input-radio1 ${errors.paymentMethod ? 'border-red-500' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bankTransfer"
                  defaultChecked={false}
                  {...register('paymentMethod', { required: true })}
                  onClick={() => setPaymentMethod('bankTransfer')}
                />
                <span className='payment-span'>Direct bank transfer</span>
              </label>
              <label className={`input-radio1 ${errors.paymentMethod ? 'border-red-500' : ''}`}>
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cashOnDelivery"
                  defaultChecked={false}
                  {...register('paymentMethod', { required: true })}
                  onClick={() => setPaymentMethod('cashOnDelivery')}
                />
                <span className='payment-span'>Cash on delivery</span>
              </label>
              {errors.paymentMethod && <span role="alert" className="error-text">This is a required field</span>}


              <button className='submit' onClick={() => handleSubmit(onSubmit)()}>Place Order</button>
            </div>

            </div>
        </div>
      </div>
    </div>
  );
}