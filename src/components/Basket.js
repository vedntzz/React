import React from 'react';
import GooglePayButton from '@google-pay/button-react';

export default function Basket(props) {
  const { cartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
  return (
    <aside className='block col-1'>
      <h2>Total Item payment</h2>
      <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
          <div key={item.id} className='row'>
            <div className='col-2'>{item.name}</div>
            <div className='col-2'>
              <button onClick={() => onRemove(item)} className='remove'>
                -
              </button>{' '}
              <button onClick={() => onAdd(item)} className='add'>
                +
              </button>
            </div>

            <div className='col-2 text-right'>
              {item.qty} x Rs. {item.price.toFixed(2)}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className='row'>
              <div className='col-2'>Items Price</div>
              <div className='col-1 text-right'>
                Rs. {itemsPrice.toFixed(2)}
              </div>
            </div>
            <div className='row'>
              <div className='col-2'>Tax Price</div>
              <div className='col-1 text-right'>Rs.{taxPrice.toFixed(2)}</div>
            </div>
            <div className='row'>
              <div className='col-2'>Shipping Price</div>
              <div className='col-1 text-right'>
                Rs. {shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className='row'>
              <div className='col-2'>
                <strong>Total Price</strong>
              </div>
              <div className='col-1 text-right'>
                <strong>Rs. {totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div
              className='row'
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '15px',
              }}
            >
              {/* <button className='payment ' onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button> */}

              <GooglePayButton
                environment='TEST'
                paymentRequest={{
                  apiVersion: 2,
                  apiVersionMinor: 0,
                  allowedPaymentMethods: [
                    {
                      type: 'CARD',
                      parameters: {
                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                      },
                      tokenizationSpecification: {
                        type: 'PAYMENT_GATEWAY',
                        parameters: {
                          gateway: 'example',
                          gatewayMerchantId: 'exampleGatewayMerchantId',
                        },
                      },
                    },
                  ],
                  merchantInfo: {
                    merchantId: '12345678901234567890',
                    merchantName: 'Demo Merchant',
                  },
                  transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',
                    totalPrice: `${totalPrice}`,
                    currencyCode: 'USD',
                    countryCode: 'US',
                  },
                  shippingAddressRequired: false,
                  callbackIntents: ['PAYMENT_AUTHORIZATION'],
                }}
                onLoadPaymentData={(paymentRequest) => {
                  console.log('load payment data', paymentRequest);
                }}
                onPaymentAuthorized={(paymentData) => {
                  console.log('Payment Authorised Success', paymentData);
                  return { transactionState: 'SUCCESS' };
                }}
                existingPaymentMethodRequired='false'
                buttonType='Buy'
              />
            </div>
          </>
        )}
      </div>
    </aside>
  );
}