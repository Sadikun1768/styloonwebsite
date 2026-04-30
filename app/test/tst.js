<!-- ─── ORDER SECTION ─── -->
<section class="order-section" id="order">
  <div class="container" style="padding:0">

    <div class="order-instruction">
      ড্রেসটি অর্ডার করতে নিচের ফর্মটি সম্পূর্ণরূপে পূরণ করে নিচের <strong>"কনফার্ম অর্ডার"</strong> বাটনে ক্লিক করুন। ২০ সেকেন্ড অপেক্ষা করুন। অর্ডার কনফার্ম হয়ে যাবে।
    </div>

    <!-- Your Products -->
    <div class="order-card">
      <div class="order-card-title">Your Products</div>
      <div class="product-summary">
        <div class="product-summary-img">
          <img src="https://stylonbd.shop/wp-content/uploads/2026/01/WhatsApp-Image-2026-01-02-at-6.47.07-PM-300x300.jpeg" alt="" onerror="this.style.display='none'">
        </div>
        <div class="product-summary-info">
          <div class="product-summary-name">Snow White Cotton Katha Stich Dress</div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="changeQty(-1)">−</button>
            <span class="qty-num" id="qty">1</span>
            <button class="qty-btn" onclick="changeQty(1)">+</button>
          </div>
        </div>
        <div class="product-summary-price">৳ ২,২৫০</div>
      </div>
    </div>

    <!-- Billing Details -->
    <div class="order-card">
      <div class="order-card-title">Billing Details</div>

      <div class="form-group">
        <label>আপনার নাম <span class="required">*</span></label>
        <input type="text" placeholder="আপনার সম্পূর্ণ নাম লিখুন" required>
      </div>

      <div class="form-group">
        <label>সম্পূর্ণ ঠিকানা <span class="required">*</span></label>
        <input type="text" placeholder="বাসা/হোল্ডিং, রোড, এলাকা" required>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>মোবাইল নম্বর <span class="required">*</span></label>
          <input type="tel" placeholder="01XXXXXXXXX" required>
        </div>
        <div class="form-group">
          <label>থানার নাম <span class="required">*</span></label>
          <input type="text" placeholder="যেমন: মিরপুর" required>
        </div>
      </div>

      <div class="form-group">
        <label>Country / Region <span class="required">*</span></label>
        <select required>
          <option selected>Bangladesh</option>
        </select>
      </div>
    </div>



    <!-- Shipping -->
    <div class="order-card">
      <div class="order-card-title">Shipping</div>
      <div class="shipping-info">
        Enter your address to view shipping options.
      </div>
    </div>

    <!-- Your Order -->
    <div class="order-card">
      <div class="order-card-title">Your Order</div>
      <div class="summary-row">
        <span class="label">Snow White Cotton Katha Stich Dress × <span id="orderQty">1</span></span>
        <span class="value" id="subtotalAmt">৳ ২,২৫০</span>
      </div>
      <div class="summary-row">
        <span class="label">Subtotal</span>
        <span class="value" id="subtotalAmt2">৳ ২,২৫০</span>
      </div>
      <div class="summary-row">
        <span class="label">Shipping</span>
        <span class="value" style="color:#888;font-weight:400;font-size:13px">Enter address to view</span>
      </div>
      <div class="summary-row total">
        <span class="label">Total</span>
        <span class="value" id="totalAmt">৳ ২,২৫০</span>
      </div>
    </div>

    <!-- Payment Method -->
    <div class="order-card">
      <div class="order-card-title">Payment Method</div>
      <label class="payment-option">
        <input type="radio" class="payment-radio" name="payment" defaultChecked>
        <div class="payment-option-content">
          <strong>Cash on delivery</strong>
          <small>Pay with cash upon delivery.</small>
        </div>
      </label>

      <div class="js-warning">
        Since your browser does not support JavaScript, or it is disabled, please ensure you click the <strong>Update Totals</strong> button before placing your order. You may be charged more than the amount stated above if you fail to do so.
      </div>

      <button class="confirm-btn">Confirm Order</button>
    </div>

  </div>
</section>




          