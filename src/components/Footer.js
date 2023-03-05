import React from 'react'
import "../styles/PreFooter.css"
import "../styles/Footer.css"

const repeatIcon = <svg xmlns="https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.pngitem.com%2Fpimgs%2Fm%2F275-2755894_repeat-icon-svg-clipart-png-download-icon-repeat.png&imgrefurl=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FiJRbmoJ_repeat-icon-svg-clipart-png-download-icon-repeat%2F&tbnid=TuwHABgiKpB6XM&vet=12ahUKEwjp-uqOicL9AhWb13MBHfk_A1EQMygEegUIARC-AQ..i&docid=Cq9fL_QGfqTeIM&w=860&h=927&q=repeat%20ICON%20SVG%20IMAGE&ved=2ahUKEwjp-uqOicL9AhWb13MBHfk_A1EQMygEegUIARC-AQ"></svg>

const shieldIcon = <svg xmlns="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdns.iconmonstr.com%2Fwp-content%2Freleases%2Fpreview%2F2012%2F240%2Ficonmonstr-shield-20.png&imgrefurl=https%3A%2F%2Ficonmonstr.com%2Fshield-20-svg%2F&tbnid=pZ64v6ff0ExrsM&vet=12ahUKEwjKpOClisL9AhW2HbcAHQzPCuQQMygAegUIARDJAQ..i&docid=yNszlYNg1OetyM&w=240&h=240&q=shield%20icon%20SVG%20IMAGE&ved=2ahUKEwjKpOClisL9AhW2HbcAHQzPCuQQMygAegUIARDJAQ"></svg>

const mapIcon = <svg xmlns ="https://www.google.com/imgres?imgurl=http%3A%2F%2Fclipart-library.com%2Fnew_gallery%2F0-8217_map-icon-png-black-address-icon-png.png&imgrefurl=http%3A%2F%2Fclipart-library.com%2Fclip-art%2F0-8217_map-icon-png-black-address-icon-png.htm&tbnid=b2wHb1O-mkKg_M&vet=12ahUKEwjekcS4isL9AhUIlNgFHQucDvwQMygGegUIARDYAQ..i&docid=bFOrHS75kMZ4cM&w=920&h=960&q=mapicon%20image%20address&ved=2ahUKEwjekcS4isL9AhUIlNgFHQucDvwQMygGegUIARDYAQ"> </svg>

const youtubeIcon = <svg xmlns ="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F1384%2F1384060.png&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fyoutube_1384060&tbnid=olkRn_Ldk4XTnM&vet=12ahUKEwitq_DSnMT9AhWcMbcAHYSuBt8QMygAegUIARDhAQ..i&docid=Urut17Ln4YetDM&w=512&h=512&q=youtube%20icon&ved=2ahUKEwitq_DSnMT9AhWcMbcAHYSuBt8QMygAegUIARDhAQ"> </svg>

const twitterIcon = <svg xmnls="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F124%2F124021.png&imgrefurl=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Ftwitter_124021&tbnid=IhQOFOWbjkVG3M&vet=12ahUKEwjM47X8ncT9AhUIFLcAHSHPDl8QMygBegUIARDiAQ..i&docid=vCzYvvD2eIXt4M&w=512&h=512&q=twitter%20icon&ved=2ahUKEwjM47X8ncT9AhUIFLcAHSHPDl8QMygBegUIARDiAQ"></svg>

const facebookIcon = <svg width="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F0%2F04%2FFacebook_f_logo_%25282021%2529.svg%2F2048px-Facebook_f_logo_%25282021%2529.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3AFacebook_f_logo_(2021).svg&tbnid=XMimdSsBlNVEaM&vet=12ahUKEwiwtPKMnsT9AhWSW3wKHRrlBjcQMygCegUIARDlAQ..i&docid=hnO9NSKezHjUoM&w=2048&h=2048&q=facebook%20icon&ved=2ahUKEwiwtPKMnsT9AhWSW3wKHRrlBjcQMygCegUIARDlAQ"></svg>

const instagramIcon = <svg xmlns="https://www.google.com/imgres?imgurl=https%3A%2F%2Fpng.pngtree.com%2Fpng-vector%2F20221018%2Fourmid%2Fpngtree-instagram-icon-png-image_6315974.png&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Finstagram&tbnid=mUtUVviCWq9uMM&vet=12ahUKEwi0lKGonsT9AhVkxHMBHbFBA_MQMygCegUIARDoAQ..i&docid=5yVKiK8lM_YwfM&w=360&h=360&itg=1&q=instagram%20icon&ved=2ahUKEwi0lKGonsT9AhVkxHMBHbFBA_MQMygCegUIARDoAQ"></svg>

const Footer = ({footer}) => {
  return (
<>
  <div className="PreFooter">
  <div> 
       {repeatIcon}
     <p> <b>Hassel-free replacement</b> <br/>10-day easy replacement policy on mi.com</p>
    </div>
    <div>{shieldIcon} <p> <b>100% secure payments</b> <br/> We support Cards, Wallets, EMI & COD</p>
     </div>
    <div>{mapIcon} <p> <b>Vast service network</b> <br/> 1000 Mi service-centers across 600 cities </p></div>
  </div>
{/* 
  <div className="PreFooter2">
    <div> <p>LET'S STAY IN TOUCH</p><span>Get updates on sales specials and more</span></div>

    <div>
        <div>
            <input type="email" name="email" placeholder="Enter Email Address" />
            <button>^</button>
        </div>
        <span>Thanks. You're on our email list for special offers. </span>
    </div>

    <div>
          <p>FOLLOW MI</p>
          <span>We want to hear from you!</span>
      
    </div>
    <div> 
     {youtubeIcon} {twitterIcon} {facebookIcon} {instagramIcon} 
  </div>
  
  </div> */}
  <div className='footer'>
    <div>
    <p> SUPPORT</p>
    {footer.support.map((item,index)=>(
        <a key={item.url} href={item.url}>{item.name}</a>
    ))}
  </div>

  <div>
    <p> SHOP AND LEARN </p>
    {footer.shopAndLearn.map((item,index)=>(
        <a key={item.url} href={item.url}>{item.name}</a>
    ))}

  </div>
  <div>
  <p> RETAIL STORE</p>
    {footer.retailStore.map((item,index)=>(
        <a key={item.url} href={item.url}>{item.name}</a>
    ))}
   </div>

<div>

         <p> ABOUT </p>
        {footer.aboutUS.map((item,index)=>(
        <a key={item.url} href={item.url}>{item.name}</a>
    ))}
</div>

  <div>
  <p> CONTACT US</p>
    {footer.contactUs.map((item,index)=>(
        <a key={item.url} href={item.url}>{item.name}</a>
    
    ))}
  </div>

  <div>
    <div>
        Chat with our virtual AI Bot(24/7 Live Agent Support)</div><button>CHAT NOW</button>
  </div>

  </div>
  <div className="footerBorder">
    <div> Copyright @ 2010 - 2021 Xiaomi. All Rights Reserved</div>

  </div>
  </>
  )
}

export default Footer;




