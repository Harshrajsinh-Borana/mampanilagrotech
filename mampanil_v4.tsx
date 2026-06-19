import { useState, useEffect, useRef } from "react";
import { ShoppingCart, Leaf, Mail, Instagram, Facebook, Linkedin, Menu, X, Droplets, Sprout, CheckCircle, Star, ArrowRight, Package, Award, Globe, ChevronDown, Clock, User, Tag, TrendingUp, BookOpen, Flower2, Recycle } from "lucide-react";

const C = { forest:"#1a4a2e", leaf:"#2d7a4f", light:"#4caf50", cream:"#f9f6f0", off:"#f2efe8", gold:"#e8a025", brown:"#7c5c3a" };

function useInView(threshold=0.15) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if(e.isIntersecting) { setVis(true); obs.disconnect(); } }, {threshold});
    if(ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, vis];
}

function FadeIn({ children, delay=0, dir="up" }) {
  const [ref, vis] = useInView();
  const tx = dir==="up"?"translateY(32px)":dir==="left"?"translateX(-32px)":"translateX(32px)";
  return (
    <div ref={ref} style={{opacity:vis?1:0, transform:vis?"none":tx, transition:`opacity .7s ease ${delay}s, transform .7s ease ${delay}s`}}>
      {children}
    </div>
  );
}

function Logo({ sz=48 }) {
  return (
    <svg width={sz} height={sz} viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="60" cy="72" rx="40" ry="19" transform="rotate(-42 60 72)" fill="#1a4a2e"/>
      <ellipse cx="140" cy="72" rx="40" ry="19" transform="rotate(42 140 72)" fill="#1a4a2e"/>
      <ellipse cx="100" cy="42" rx="21" ry="44" fill="#1a4a2e"/>
      <circle cx="40" cy="60" r="5" fill="white"/>
      <path d="M45 60 Q72 78 97 97" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <circle cx="160" cy="60" r="5" fill="white"/>
      <path d="M155 60 Q128 78 103 97" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <circle cx="100" cy="8" r="5" fill="white"/>
      <path d="M100 13 L100 97" stroke="white" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M55 118 Q72 108 90 118 Q108 128 125 118 Q142 108 155 118" stroke="#1a4a2e" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
      <path d="M50 132 Q69 122 90 132 Q111 142 130 132 Q149 122 160 132" stroke="#1a4a2e" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

const BLOGS = [
  {
    id:1,
    slug:"vermicompost-vs-chemical-fertilizer",
    icon: <Recycle size={32}/>,
    tag:"Organic Fertilizer",
    readTime:"6 min read",
    title:"Vermicompost vs Chemical Fertilizers: Why Organic Always Wins for Your Plants",
    meta:"Discover why vermicompost fertilizer outperforms chemical alternatives — safer for soil, better for plants, and the best choice for sustainable home gardening in India.",
    intro:"Millions of Indian gardeners still reach for chemical fertilizers out of habit. But the science — and the soil — tells a very different story.",
    sections:[
      { h:"What is vermicompost and why does it matter?", body:"Vermicompost is the end-product of organic matter decomposed by earthworms. It is packed with plant-available nitrogen, phosphorus, potassium, and a spectrum of micronutrients that chemical fertilizers simply cannot replicate. Unlike synthetic options, vermicompost releases nutrients slowly, feeding your plants steadily rather than in a single overwhelming burst." },
      { h:"The hidden damage of chemical fertilizers", body:"Chemical fertilizers provide a short-term growth spike but degrade soil structure over time. They kill beneficial microbial life, increase soil salinity, and their runoff contaminates groundwater. Studies show that repeated chemical fertilizer use reduces soil organic carbon — the very foundation of healthy plant growth — by up to 40% over a decade." },
      { h:"Navjeev Vermicompost: the smarter choice", body:"Navjeev by Mampanil Agrotech is 100% organic vermicompost with Organic Carbon >18%, Nitrogen >1.5%, Phosphorus >0.5%, and Potassium >0.5%. Every application improves your soil's long-term health rather than depleting it. It is odorless, pet-safe, and works for everything from indoor succulents to outdoor fruit trees." },
      { h:"How to use vermicompost correctly", body:"For potted plants, lightly loosen the topsoil and mix 150–250g of Navjeev vermicompost per plant. Water immediately after application. For trees, apply near the root zone using the ring method — dig a shallow circular trench along the edges of the root zone, fill with vermicompost, and water well. Repeat every 30 days for optimal results." },
    ],
    cta:"Order Navjeev Vermicompost today — ₹150 per kg, free delivery above ₹499."
  },
  {
    id:2,
    slug:"home-gardening-organic-tips-india",
    icon: <Flower2 size={32}/>,
    tag:"Home Gardening",
    readTime:"7 min read",
    title:"The Complete Guide to Organic Home Gardening in India (2025 Edition)",
    meta:"Start your organic home garden the right way. From soil preparation to plant selection and organic fertilizer application — everything Indian home gardeners need to know.",
    intro:"Home gardening in India is experiencing a renaissance. Balcony gardens, terrace farms, and kitchen herb patches are transforming urban homes. Here's how to do it right, organically.",
    sections:[
      { h:"Choosing the right soil mix for Indian conditions", body:"Indian urban soil is often compacted and nutrient-poor. A good potting mix combines garden soil (40%), cocopeat (30%), and organic compost like vermicompost (30%). This ratio ensures excellent drainage, moisture retention, and a steady nutrient supply. Refresh your soil mix annually or whenever plants show signs of nutrient deficiency." },
      { h:"Best plants for Indian balcony and terrace gardens", body:"Start with fast-growing, high-reward plants: tomatoes, chillies, curry leaves, tulsi, coriander, spinach, and marigolds. These thrive in Indian temperatures and respond spectacularly well to organic feeding. Flowering plants like bougainvillea and roses show noticeably richer blooms within two watering cycles of vermicompost application." },
      { h:"Organic fertilization schedule that actually works", body:"The biggest mistake beginner gardeners make is inconsistent feeding. Set a 30-day cycle: on day 1, apply 150–250g of vermicompost per potted plant by mixing it lightly into the topsoil. Water immediately. Mark the date. Repeat in 30 days. For kitchen garden plants, use 100–200g per plant. The results — deeper green leaves, stronger stems, more flowers — are visible within two weeks." },
      { h:"Common organic gardening mistakes to avoid", body:"Never over-water after fertilizer application — a light, even watering is all that's needed. Avoid placing fertilizer directly on stems or leaves. Do not mix chemical and organic fertilizers as this disrupts beneficial soil bacteria. And always choose certified organic compost; non-certified products often contain heavy metals or synthetic boosters that undermine your organic garden goals." },
    ],
    cta:"Give your garden the Navjeev advantage — shop now at ₹150 per 1 kg bag."
  },
  {
    id:3,
    slug:"sustainable-gardening-benefits-environment",
    icon: <TrendingUp size={32}/>,
    tag:"Sustainable Living",
    readTime:"5 min read",
    title:"How Sustainable Gardening Reduces Your Carbon Footprint (and Saves Money)",
    meta:"Sustainable gardening with organic inputs like vermicompost is one of the most accessible ways to reduce your household's environmental impact while growing healthier plants.",
    intro:"Every bag of organic compost you choose over chemical fertilizer is a vote for a healthier planet. Here's the real environmental and financial case for going sustainable.",
    sections:[
      { h:"The carbon math of your garden", body:"Chemical fertilizer production is one of the most energy-intensive industrial processes on Earth, responsible for approximately 1.2% of global CO₂ emissions annually. Vermicompost, by contrast, is made entirely from organic waste — no fossil fuels, no industrial processing, zero synthetic chemistry. Choosing vermicompost for your garden directly reduces demand for this carbon-heavy industry." },
      { h:"Organic waste to plant gold: the vermicomposting cycle", body:"Vermicomposting closes a natural nutrient loop. Organic kitchen and farm waste is processed by earthworms into a nutrient-dense compost that returns those same minerals to the soil. This circular process reduces landfill waste, produces zero harmful runoff, and enriches soil microbial biodiversity — a key indicator of long-term ecosystem health." },
      { h:"Financial benefits of switching to organic gardening", body:"While chemical fertilizers may appear cheaper per gram, they require more frequent application and their long-term soil degradation forces you to buy more each season. Organic gardeners using vermicompost report 30–40% lower annual input costs after the first year because healthy, living soil needs progressively less external feeding. Navjeev at ₹150 per kg is an investment that pays compounding dividends." },
      { h:"Making sustainability a household habit", body:"The shift to sustainable gardening is also a mindset shift. When you choose organic inputs, you begin noticing the health of your soil, the activity of earthworms, the richness of your compost. This awareness naturally extends to other areas — water conservation, reduced pesticide use, and eventually, a home that produces and wastes far less. It starts with a single bag of vermicompost." },
    ],
    cta:"Start your sustainable garden journey with Navjeev — ₹150 per kg. Order online or contact us."
  },
];

const founders = [
  { name:"Monil Khamar", role:"Co-Founder & Director", initials:"MK", photo:"YOUR_MONIL_PHOTO_URL",
    tags:["Growth & Expansion","Finance","Marketing & Sales","Logistics"],
    bio:"Monil is the strategic engine behind Mampanil Agrotech's growth. He drives company expansion, manages finance, and leads all marketing and sales operations — ensuring Navjeev reaches every home that needs it. His entrepreneurial vision and relentless focus on brand building is what puts Mampanil Agrotech on the global map.",
    li:"https://www.linkedin.com/in/monilkhamar/" },
  { name:"Harshrajsinh Borana", role:"Co-Founder & Director", initials:"HB", photo:"YOUR_HARSH_PHOTO_URL",
    tags:["Product & Operations","Modern Farming","Quality Control","Tech & Online Sales"],
    bio:"Harsh is the soul of Navjeev. He leads product development, operations, and modern farming research — personally overseeing every stage of the vermicomposting process to guarantee each bag meets the highest organic standards. He manages the production team end-to-end and also drives Mampanil Agrotech's technology infrastructure and online sales.",
    li:"https://www.linkedin.com/in/harshrajsinh-borana/" },
];

const features = [
  { icon:<Sprout size={26}/>, title:"NPK & Organic Carbon Rich", desc:"Nitrogen >1.5%, Phosphorus >0.5%, Potassium >0.5%, Organic Carbon >18% — every nutrient your plant needs, in bioavailable form." },
  { icon:<Droplets size={26}/>, title:"100% Odorless & Pet Safe", desc:"Fully processed vermicompost. No foul smell. Safe around children, pets, and indoor spaces." },
  { icon:<CheckCircle size={26}/>, title:"Easy Monthly Application", desc:"Just 150–250g per plant once every 30 days. Mix into topsoil, water immediately. That's it." },
  { icon:<Award size={26}/>, title:"Wholly Organic Process", desc:"Zero synthetic chemistry. Certified organic from earthworm to bag — for gardens you can trust." },
];

const dosage = [
  { icon:"🌿", type:"Ornamental Indoor Plants", amount:"150g – 250g per plant", freq:"Once every 30 days" },
  { icon:"🌸", type:"Flowering & Outdoor Plants", amount:"200g – 300g per plant", freq:"Once every 30 days" },
  { icon:"🥬", type:"Kitchen Garden Plants", amount:"100g – 200g per plant", freq:"Once every 30 days" },
  { icon:"🌱", type:"Lawns & Planting Beds", amount:"0.30 – 0.50 in layer", freq:"Once every 3 months" },
];

const nutrients = [
  { name:"Organic Carbon", val:">18%", w:90 },
  { name:"Nitrogen", val:">1.5%", w:60 },
  { name:"Phosphorus", val:">0.5%", w:40 },
  { name:"Potassium", val:">0.5%", w:40 },
  { name:"Calcium", val:">0.4%", w:35 },
  { name:"Sulphur", val:">100ppm", w:55 },
  { name:"Iron", val:">6ppm", w:28 },
];

function NutrientBar({ name, val, w, i, vis }) {
  return (
    <div style={{marginBottom:12}}>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}>
        <span style={{fontSize:13,color:"#555",fontWeight:500}}>{name}</span>
        <span style={{fontSize:13,color:C.leaf,fontWeight:700}}>{val}</span>
      </div>
      <div style={{background:"#e8f5e9",borderRadius:99,height:7,overflow:"hidden"}}>
        <div style={{height:"100%",borderRadius:99,background:`linear-gradient(90deg,${C.forest},${C.leaf})`,width:vis?`${w}%`:"0%",transition:`width 1.2s ease ${i*0.1}s`}}/>
      </div>
    </div>
  );
}

export default function App() {
  const [menu, setMenu] = useState(false);
  const [cart, setCart] = useState(0);
  const [qty, setQty] = useState(1);
  const [blog, setBlog] = useState(null);
  const [nm, setNm] = useState(""); const [em, setEm] = useState(""); const [ph, setPh] = useState(""); const [msg, setMsg] = useState("");
  const [done, setDone] = useState(false);
  const [nutRef, nutVis] = useInView();

  const go = id => {
    setBlog(null);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({behavior:"smooth"}), 50);
    setMenu(false);
  };

  const submit = () => {
    if (!nm || !em || !msg) return;
    setDone(true); setNm(""); setEm(""); setPh(""); setMsg("");
    setTimeout(()=>setDone(false), 3500);
  };

  const grad = `linear-gradient(135deg,${C.forest},${C.leaf})`;
  const navBg = C.forest;

  if (blog) {
    const b = BLOGS.find(x=>x.id===blog);
    return (
      <div style={{fontFamily:"'Inter','Poppins',sans-serif",background:C.cream,minHeight:"100vh"}}>
        <div style={{background:navBg,padding:"12px 24px",display:"flex",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:50,boxShadow:"0 2px 12px rgba(0,0,0,.3)"}}>
          <button onClick={()=>setBlog(null)} style={{display:"flex",alignItems:"center",gap:8,background:"none",border:"none",cursor:"pointer",color:"white",fontSize:14,fontWeight:600}}>
            ← Back to Website
          </button>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <div style={{background:"white",borderRadius:"50%",padding:6}}><Logo sz={32}/></div>
            <span style={{color:"white",fontWeight:700,fontSize:14}}>Mampanil Agrotech</span>
          </div>
        </div>
        <div style={{maxWidth:780,margin:"0 auto",padding:"48px 24px 80px"}}>
          <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:16}}>
            <span style={{background:"#e8f5e9",color:C.forest,borderRadius:999,padding:"4px 12px",fontSize:12,fontWeight:700}}>{b.tag}</span>
            <span style={{color:"#aaa",fontSize:12,display:"flex",alignItems:"center",gap:4}}><Clock size={12}/> {b.readTime}</span>
          </div>
          <h1 style={{fontSize:"clamp(1.6rem,3.5vw,2.2rem)",fontWeight:900,color:C.forest,lineHeight:1.25,marginBottom:20}}>{b.title}</h1>
          <div style={{background:"#e8f5e9",borderLeft:`4px solid ${C.leaf}`,padding:"16px 20px",borderRadius:"0 12px 12px 0",marginBottom:36}}>
            <p style={{color:C.forest,fontSize:15,lineHeight:1.7,margin:0,fontStyle:"italic"}}>{b.intro}</p>
          </div>
          {b.sections.map((s,i)=>(
            <div key={i} style={{marginBottom:36}}>
              <h2 style={{fontSize:19,fontWeight:800,color:C.forest,marginBottom:12,display:"flex",alignItems:"center",gap:8}}>
                <span style={{color:C.leaf,fontSize:20}}>◆</span> {s.h}
              </h2>
              <p style={{color:"#555",fontSize:15,lineHeight:1.85,margin:0}}>{s.body}</p>
            </div>
          ))}
          <div style={{background:grad,borderRadius:20,padding:"28px 32px",textAlign:"center",marginTop:40}}>
            <p style={{color:"white",fontSize:16,fontWeight:700,margin:"0 0 16px"}}>{b.cta}</p>
            <button onClick={()=>go("home")} style={{background:"white",color:C.forest,border:"none",borderRadius:999,padding:"10px 28px",fontWeight:700,fontSize:14,cursor:"pointer"}}>
              Shop Navjeev Now →
            </button>
          </div>
          <div style={{marginTop:48,padding:"24px 0",borderTop:`1px solid #e0e0e0`}}>
            <p style={{color:"#aaa",fontSize:13,margin:"0 0 8px"}}>Also from Mampanil Agrotech:</p>
            <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
              {BLOGS.filter(x=>x.id!==b.id).map(x=>(
                <button key={x.id} onClick={()=>setBlog(x.id)}
                  style={{background:"white",border:`1px solid #e0e0e0`,borderRadius:12,padding:"8px 16px",fontSize:13,color:C.forest,cursor:"pointer",fontWeight:600}}>
                  {x.title.substring(0,55)}…
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{fontFamily:"'Inter','Poppins',sans-serif",background:C.cream,minHeight:"100vh"}}>

      {/* ── NAV ── */}
      <div style={{background:navBg,position:"sticky",top:0,zIndex:50,boxShadow:"0 2px 16px rgba(0,0,0,.25)"}}>
        <div style={{maxWidth:1140,margin:"0 auto",padding:"10px 20px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <button onClick={()=>go("home")} style={{display:"flex",alignItems:"center",gap:10,background:"none",border:"none",cursor:"pointer"}}>
            <div style={{background:"white",borderRadius:"50%",padding:7,display:"flex",boxShadow:"0 2px 8px rgba(0,0,0,.2)"}}><Logo sz={34}/></div>
            <div style={{textAlign:"left",lineHeight:1.2}}>
              <div style={{color:"white",fontWeight:800,fontSize:15,letterSpacing:.3}}>Mampanil Agrotech</div>
              <div style={{color:"rgba(255,255,255,.5)",fontSize:10,letterSpacing:3}}>SUSTAINABLE AGRITECH</div>
            </div>
          </button>
          <div style={{display:"flex",gap:28}} className="hidden md:flex">
            {[["home","Home"],["why","Why Navjeev"],["about","About Us"],["blog","Blog"],["contact","Contact"]].map(([id,l])=>(
              <button key={id} onClick={()=>go(id)} style={{color:"rgba(255,255,255,.75)",background:"none",border:"none",cursor:"pointer",fontSize:13,fontWeight:500,letterSpacing:.3}}>{l}</button>
            ))}
          </div>
          <div style={{display:"flex",alignItems:"center",gap:12}} className="hidden md:flex">
            <button onClick={()=>setCart(c=>c+1)} style={{background:"none",border:"none",cursor:"pointer",position:"relative",padding:6}}>
              <ShoppingCart size={20} color="rgba(255,255,255,.8)"/>
              {cart>0&&<span style={{position:"absolute",top:-2,right:-2,background:C.gold,color:"white",borderRadius:"50%",width:16,height:16,fontSize:10,display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700}}>{cart}</span>}
            </button>
            <button onClick={()=>go("home")} style={{background:C.gold,color:"white",border:"none",borderRadius:999,padding:"9px 20px",fontSize:13,fontWeight:700,cursor:"pointer",letterSpacing:.3}}>
              Buy Navjeev ₹150
            </button>
          </div>
          <button onClick={()=>setMenu(o=>!o)} style={{background:"none",border:"none",cursor:"pointer",color:"white"}} className="md:hidden">
            {menu?<X size={24}/>:<Menu size={24}/>}
          </button>
        </div>
        {menu&&(
          <div style={{background:navBg,padding:"8px 20px 20px",borderTop:"1px solid rgba(255,255,255,.1)"}}>
            {[["home","Home"],["why","Why Navjeev"],["about","About Us"],["blog","Blog"],["contact","Contact"]].map(([id,l])=>(
              <button key={id} onClick={()=>go(id)} style={{display:"block",color:"rgba(255,255,255,.8)",background:"none",border:"none",cursor:"pointer",padding:"8px 0",fontSize:14,width:"100%",textAlign:"left"}}>{l}</button>
            ))}
          </div>
        )}
      </div>

      {/* ── HERO ── */}
      <div id="home" style={{background:`linear-gradient(160deg,#0d2a1a 0%,#1a4a2e 40%,#2d7a4f 100%)`,padding:"80px 20px 100px",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",top:-40,right:-60,width:400,height:400,borderRadius:"50%",background:"rgba(255,255,255,.03)"}}/>
        <div style={{position:"absolute",bottom:-80,left:-40,width:300,height:300,borderRadius:"50%",background:"rgba(255,255,255,.03)"}}/>
        <div style={{maxWidth:1140,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:56,alignItems:"center",position:"relative",zIndex:1}}>
          <FadeIn dir="left">
            <div style={{display:"inline-flex",alignItems:"center",gap:6,background:"rgba(255,255,255,.12)",color:"rgba(255,255,255,.9)",borderRadius:999,padding:"5px 14px",fontSize:11,fontWeight:700,letterSpacing:2,marginBottom:24,textTransform:"uppercase",border:"1px solid rgba(255,255,255,.2)"}}>
              <Leaf size={11}/> 100% Organic Certified · Est. 2024
            </div>
            <h1 style={{fontSize:"clamp(2rem,5vw,3.2rem)",fontWeight:900,lineHeight:1.1,color:"white",marginBottom:20}}>
              Give New Life<br/>to Your Plants<br/><span style={{color:"#7dcfa0"}}>Naturally.</span>
            </h1>
            <p style={{color:"rgba(255,255,255,.75)",fontSize:17,lineHeight:1.8,marginBottom:12,maxWidth:500}}>
              We believe in a world where living sustainably is simple and accessible. That's why Mampanil Agrotech brings you <strong style={{color:"white"}}>Navjeev</strong> — a natural marvel born from earthworms converting organic waste into a powerhouse of plant nutrition.
            </p>
            <p style={{color:"rgba(255,255,255,.6)",fontSize:15,lineHeight:1.7,marginBottom:32,maxWidth:500}}>
              Our wholly organic process ensures your plants receive every vital nutrient, promoting their best health and vigor. <em>Your choice makes a difference.</em>
            </p>
            <div style={{display:"flex",flexWrap:"wrap",gap:12}}>
              <button onClick={()=>go("contact")} style={{background:C.gold,color:"white",border:"none",borderRadius:999,padding:"13px 28px",fontSize:14,fontWeight:700,cursor:"pointer",display:"flex",alignItems:"center",gap:8}}>
                Order Now — ₹150/kg <ArrowRight size={16}/>
              </button>
              <button onClick={()=>go("why")} style={{background:"rgba(255,255,255,.1)",color:"white",border:"1px solid rgba(255,255,255,.3)",borderRadius:999,padding:"13px 28px",fontSize:14,fontWeight:600,cursor:"pointer"}}>
                Why Navjeev?
              </button>
            </div>
            <div style={{display:"flex",gap:32,marginTop:36}}>
              {[["100%","Organic"],["3yr","Shelf Life"],["10+","Nutrients"],["₹150","Per kg"]].map(([v,l])=>(
                <div key={l} style={{textAlign:"center"}}>
                  <div style={{color:"#7dcfa0",fontSize:22,fontWeight:900}}>{v}</div>
                  <div style={{color:"rgba(255,255,255,.5)",fontSize:11,fontWeight:500,letterSpacing:1}}>{l}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Product card */}
          <FadeIn dir="right" delay={0.15}>
            <div style={{background:"white",borderRadius:28,boxShadow:"0 32px 80px rgba(0,0,0,.35)",overflow:"hidden",maxWidth:400,margin:"0 auto"}}>
              <div style={{background:grad,height:200,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
                <span style={{position:"absolute",top:14,right:14,background:C.gold,color:"white",borderRadius:999,padding:"4px 12px",fontSize:11,fontWeight:700,letterSpacing:1}}>100% ORGANIC</span>
                <div style={{background:"rgba(255,255,255,.18)",borderRadius:20,padding:"18px 40px",display:"flex",flexDirection:"column",alignItems:"center",backdropFilter:"blur(4px)",border:"1px solid rgba(255,255,255,.25)"}}>
                  <div style={{background:"white",borderRadius:"50%",padding:10,boxShadow:"0 4px 20px rgba(0,0,0,.2)",marginBottom:8}}><Logo sz={50}/></div>
                  <div style={{color:"rgba(255,255,255,.65)",fontSize:10,letterSpacing:4,textTransform:"uppercase",marginBottom:2}}>Mampanil Agrotech</div>
                  <div style={{color:"white",fontSize:26,fontWeight:900,letterSpacing:4}}>NAVJEEV</div>
                  <div style={{color:"rgba(255,255,255,.75)",fontSize:12,marginTop:2}}>Premium Vermicompost Manure</div>
                </div>
              </div>
              <div style={{padding:24}}>
                <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:4}}>
                  <span style={{fontWeight:800,fontSize:17,color:C.forest}}>Navjeev Vermicompost</span>
                  <div style={{display:"flex",gap:1}}>{[...Array(5)].map((_,i)=><Star key={i} size={13} fill="#f59e0b" color="#f59e0b"/>)}</div>
                </div>
                <div style={{color:"#bbb",fontSize:12,marginBottom:14}}>1 kg Bag · Best before 3 years from manufacturing</div>
                <div style={{display:"flex",flexWrap:"wrap",gap:5,marginBottom:18}}>
                  {["NPK Rich","Odorless","Pet Safe","Indoor & Outdoor","Organic Carbon >18%"].map(t=>(
                    <span key={t} style={{background:"#e8f5e9",color:C.forest,borderRadius:999,padding:"3px 9px",fontSize:11,fontWeight:600}}>{t}</span>
                  ))}
                </div>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:18}}>
                  <div>
                    <span style={{fontSize:28,fontWeight:900,color:C.forest}}>₹150</span>
                    <span style={{color:"#ddd",textDecoration:"line-through",fontSize:13,marginLeft:8}}>₹199</span>
                    <span style={{background:"#fff3cd",color:"#856404",borderRadius:999,padding:"2px 8px",fontSize:11,fontWeight:700,marginLeft:6}}>25% OFF</span>
                  </div>
                  <div style={{display:"flex",alignItems:"center",border:"1px solid #e8e8e8",borderRadius:10,overflow:"hidden"}}>
                    <button onClick={()=>setQty(q=>Math.max(1,q-1))} style={{background:"none",border:"none",cursor:"pointer",padding:"5px 12px",fontSize:18,color:"#888"}}>−</button>
                    <span style={{padding:"5px 12px",fontSize:13,fontWeight:600,borderLeft:"1px solid #e8e8e8",borderRight:"1px solid #e8e8e8"}}>{qty}</span>
                    <button onClick={()=>setQty(q=>q+1)} style={{background:"none",border:"none",cursor:"pointer",padding:"5px 12px",fontSize:18,color:"#888"}}>+</button>
                  </div>
                </div>
                <button onClick={()=>setCart(c=>c+qty)} style={{background:grad,color:"white",border:"none",borderRadius:14,padding:"13px 0",width:"100%",fontWeight:700,fontSize:15,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8}}>
                  <ShoppingCart size={17}/> Add to Cart — ₹{150*qty}
                </button>
                <div style={{textAlign:"center",fontSize:11,color:"#ccc",marginTop:10}}>🌱 Free delivery above ₹499 · mampanilagrotech@gmail.com</div>
              </div>
            </div>
          </FadeIn>
        </div>
        <div style={{textAlign:"center",marginTop:64,opacity:.5,cursor:"pointer"}} onClick={()=>go("why")}>
          <ChevronDown size={28} color="white" style={{animation:"bounce 2s infinite"}}/>
        </div>
      </div>
      <style>{`@keyframes bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(8px)}}`}</style>

      {/* ── WHY BUY FROM US ── */}
      <div style={{background:"white",padding:"80px 20px"}}>
        <div style={{maxWidth:1140,margin:"0 auto"}}>
          <FadeIn>
            <div style={{textAlign:"center",marginBottom:56}}>
              <span style={{color:C.leaf,fontSize:11,fontWeight:700,letterSpacing:4,textTransform:"uppercase"}}>Our Promise</span>
              <h2 style={{fontSize:"clamp(1.7rem,3.5vw,2.4rem)",fontWeight:900,color:C.forest,margin:"10px 0 16px"}}>Why Buy From Us?</h2>
              <p style={{color:"#777",fontSize:16,lineHeight:1.8,maxWidth:700,margin:"0 auto"}}>
                We believe in a world where living sustainably is simple and accessible. That's why Mampanil Agrotech brings you vermicompost fertilizer — a natural marvel born from earthworms converting organic waste into a powerhouse of plant nutrition. Our wholly organic process ensures your plants receive every vital nutrient, promoting their best health and vigor.
              </p>
              <p style={{color:C.leaf,fontSize:15,fontStyle:"italic",marginTop:16,fontWeight:600}}>
                "Thank you for being a vital part of our journey to make Mampanil Agrotech a globally recognized brand for sustainable gardening. Your choice makes a difference."
              </p>
            </div>
          </FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:24}}>
            {features.map((f,i)=>(
              <FadeIn key={i} delay={i*0.1}>
                <div style={{background:C.cream,borderRadius:20,padding:"28px 24px",textAlign:"center",border:`1px solid #e8f5e9`,transition:"box-shadow .3s"}}>
                  <div style={{width:60,height:60,borderRadius:16,background:"#e8f5e9",color:C.leaf,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px"}}>{f.icon}</div>
                  <div style={{fontWeight:700,fontSize:14,color:C.forest,marginBottom:8}}>{f.title}</div>
                  <div style={{color:"#888",fontSize:13,lineHeight:1.65}}>{f.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* ── APPLICATION ── */}
      <div style={{background:C.off,padding:"80px 20px"}}>
        <div style={{maxWidth:1140,margin:"0 auto",display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:48,alignItems:"center"}}>
          <FadeIn dir="left">
            <span style={{color:C.leaf,fontSize:11,fontWeight:700,letterSpacing:4,textTransform:"uppercase"}}>How to Apply</span>
            <h2 style={{fontSize:"clamp(1.6rem,3vw,2.2rem)",fontWeight:900,color:C.forest,margin:"10px 0 20px"}}>Simple Application,<br/>Remarkable Results</h2>
            <div style={{display:"flex",flexDirection:"column",gap:20}}>
              {[
                { emoji:"🪴", title:"Potted Plants", body:"Lightly loosen the top layer of soil and mix Navjeev vermicompost directly into the soil. Water the plants immediately after application for best results." },
                { emoji:"🌳", title:"Trees & Shrubs", body:"Apply near the root zone using the ring method — dig a shallow circular trench along the edges of the root zone, fill evenly with vermicompost, and water well." },
              ].map((a,i)=>(
                <div key={i} style={{background:"white",borderRadius:16,padding:"20px 24px",display:"flex",gap:16,alignItems:"flex-start",boxShadow:"0 4px 16px rgba(0,0,0,.06)"}}>
                  <span style={{fontSize:28,flexShrink:0}}>{a.emoji}</span>
                  <div>
                    <div style={{fontWeight:700,fontSize:15,color:C.forest,marginBottom:6}}>{a.title}</div>
                    <div style={{color:"#777",fontSize:13,lineHeight:1.65}}>{a.body}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
          <FadeIn dir="right" delay={0.1}>
            <div ref={nutRef} style={{background:"white",borderRadius:24,padding:32,boxShadow:"0 8px 32px rgba(0,0,0,.08)"}}>
              <div style={{fontWeight:800,fontSize:17,color:C.forest,marginBottom:4}}>Nutrient Profile</div>
              <div style={{color:"#aaa",fontSize:12,marginBottom:24}}>What's inside every bag of Navjeev</div>
              {nutrients.map((n,i)=><NutrientBar key={n.name} {...n} i={i} vis={nutVis}/>)}
              <div style={{marginTop:16,padding:"12px 16px",background:"#e8f5e9",borderRadius:12,fontSize:12,color:C.forest,textAlign:"center",fontWeight:600}}>
                + Copper, Zinc, Manganese & more trace minerals
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── DOSAGE ── */}
      <div id="why" style={{background:grad,padding:"80px 20px"}}>
        <div style={{maxWidth:1140,margin:"0 auto"}}>
          <FadeIn>
            <div style={{textAlign:"center",marginBottom:48}}>
              <span style={{color:"rgba(255,255,255,.6)",fontSize:11,fontWeight:700,letterSpacing:4,textTransform:"uppercase"}}>Usage Guide</span>
              <h2 style={{fontSize:"clamp(1.6rem,3vw,2.2rem)",fontWeight:900,color:"white",margin:"10px 0 8px"}}>Dosage Instructions</h2>
              <p style={{color:"rgba(255,255,255,.65)",fontSize:14}}>Right amount, right result — every time</p>
            </div>
          </FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",gap:20}}>
            {dosage.map((d,i)=>(
              <FadeIn key={i} delay={i*0.1}>
                <div style={{background:"rgba(255,255,255,.12)",borderRadius:20,padding:"28px 20px",textAlign:"center",border:"1px solid rgba(255,255,255,.2)",backdropFilter:"blur(4px)"}}>
                  <span style={{fontSize:36}}>{d.icon}</span>
                  <div style={{color:"white",fontWeight:700,fontSize:14,margin:"14px 0 8px"}}>{d.type}</div>
                  <div style={{color:"rgba(255,255,255,.9)",fontWeight:800,fontSize:16,marginBottom:6}}>{d.amount}</div>
                  <div style={{color:"rgba(255,255,255,.55)",fontSize:12}}>{d.freq}</div>
                </div>
              </FadeIn>
            ))}
          </div>
          <p style={{textAlign:"center",color:"rgba(255,255,255,.35)",fontSize:11,marginTop:32}}>*Nutrients may vary as product is completely made from natural processes. For feedback and complaints please contact us on our email.</p>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <div id="about" style={{background:"white",padding:"80px 20px"}}>
        <div style={{maxWidth:1140,margin:"0 auto"}}>
          <FadeIn>
            <div style={{textAlign:"center",marginBottom:56}}>
              <span style={{color:C.leaf,fontSize:11,fontWeight:700,letterSpacing:4,textTransform:"uppercase"}}>Our Story</span>
              <h2 style={{fontSize:"clamp(1.7rem,3.5vw,2.4rem)",fontWeight:900,color:C.forest,margin:"10px 0 16px"}}>About Mampanil Agrotech LLP</h2>
              <p style={{color:"#777",fontSize:16,lineHeight:1.8,maxWidth:680,margin:"0 auto"}}>
                Founded with a singular vision — to become a <strong>globally recognized brand for sustainable agriculture and agritech</strong> — Mampanil Agrotech bridges modern science with the timeless wisdom of natural farming.
              </p>
            </div>
          </FadeIn>

          {/* Stats strip */}
          <FadeIn delay={0.1}>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:16,marginBottom:64,background:C.cream,borderRadius:20,padding:24}}>
              {[["100%","Organic Process"],["3 Years","Shelf Life"],["10+","Micronutrients"],["4","Plant Categories"],["₹150","Per kg, incl. delivery"],["∞","Eco Impact"]].map(([v,l])=>(
                <div key={l} style={{textAlign:"center",padding:"12px 0"}}>
                  <div style={{fontSize:24,fontWeight:900,color:C.leaf}}>{v}</div>
                  <div style={{fontSize:11,color:"#aaa",marginTop:3,fontWeight:500}}>{l}</div>
                </div>
              ))}
            </div>
          </FadeIn>

          <div style={{textAlign:"center",marginBottom:32}}>
            <h3 style={{fontSize:22,fontWeight:800,color:C.forest,margin:0}}>Meet the Directors</h3>
            <p style={{color:"#aaa",marginTop:8,fontSize:13}}>The passionate minds who built Navjeev from the ground up</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:32}}>
            {founders.map((f,idx)=>(
              <FadeIn key={f.name} delay={idx*0.15}>
                <div style={{background:C.cream,borderRadius:28,padding:36,display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",border:`1px solid #e8f5e9`}}>
                  {f.photo&&!f.photo.startsWith("YOUR") ? (
                    <img src={f.photo} alt={f.name} style={{width:120,height:120,borderRadius:"50%",objectFit:"cover",objectPosition:"top",border:`4px solid ${C.leaf}`,boxShadow:"0 8px 24px rgba(0,0,0,.12)",marginBottom:18}}/>
                  ) : (
                    <div style={{width:120,height:120,borderRadius:"50%",border:`4px solid ${C.leaf}`,background:grad,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:28,fontWeight:900,marginBottom:18,boxShadow:"0 8px 24px rgba(0,0,0,.12)"}}>
                      {f.initials}
                    </div>
                  )}
                  <div style={{fontWeight:800,fontSize:19,color:C.forest}}>{f.name}</div>
                  <div style={{fontWeight:600,fontSize:13,color:C.leaf,marginBottom:14}}>{f.role}</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:6,justifyContent:"center",marginBottom:16}}>
                    {f.tags.map(t=>(
                      <span key={t} style={{background:"#e8f5e9",color:C.forest,borderRadius:999,padding:"3px 10px",fontSize:11,fontWeight:600}}>{t}</span>
                    ))}
                  </div>
                  <p style={{color:"#777",fontSize:13,lineHeight:1.75,marginBottom:22}}>{f.bio}</p>
                  <a href={f.li} target="_blank" rel="noopener noreferrer"
                    style={{background:"#0077b5",color:"white",borderRadius:999,padding:"9px 22px",fontSize:13,fontWeight:600,textDecoration:"none",display:"flex",alignItems:"center",gap:6}}>
                    <Linkedin size={14}/> LinkedIn Profile
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* ── BLOG ── */}
      <div id="blog" style={{background:C.off,padding:"80px 20px"}}>
        <div style={{maxWidth:1140,margin:"0 auto"}}>
          <FadeIn>
            <div style={{textAlign:"center",marginBottom:56}}>
              <span style={{color:C.leaf,fontSize:11,fontWeight:700,letterSpacing:4,textTransform:"uppercase"}}>Learn & Grow</span>
              <h2 style={{fontSize:"clamp(1.7rem,3.5vw,2.4rem)",fontWeight:900,color:C.forest,margin:"10px 0 14px"}}>The Mampanil Garden Blog</h2>
              <p style={{color:"#777",fontSize:15,maxWidth:560,margin:"0 auto",lineHeight:1.7}}>Expert guides on organic gardening, vermicompost benefits, and sustainable living — helping you grow smarter.</p>
            </div>
          </FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:28}}>
            {BLOGS.map((b,i)=>(
              <FadeIn key={b.id} delay={i*0.1}>
                <div style={{background:"white",borderRadius:24,overflow:"hidden",boxShadow:"0 4px 20px rgba(0,0,0,.07)",cursor:"pointer",transition:"transform .2s, box-shadow .2s"}}
                  onClick={()=>{ setBlog(b.id); setTimeout(()=>window.scrollTo({top:0,behavior:"smooth"}),50); }}>
                  <div style={{background:grad,height:140,display:"flex",alignItems:"center",justifyContent:"center",position:"relative"}}>
                    <div style={{background:"rgba(255,255,255,.15)",borderRadius:"50%",width:72,height:72,display:"flex",alignItems:"center",justifyContent:"center",color:"white"}}>
                      {b.icon}
                    </div>
                    <span style={{position:"absolute",top:14,left:14,background:"rgba(255,255,255,.2)",color:"white",borderRadius:999,padding:"3px 10px",fontSize:11,fontWeight:700,border:"1px solid rgba(255,255,255,.3)"}}>{b.tag}</span>
                  </div>
                  <div style={{padding:"24px 24px 28px"}}>
                    <div style={{display:"flex",alignItems:"center",gap:12,marginBottom:12,color:"#bbb",fontSize:11}}>
                      <span style={{display:"flex",alignItems:"center",gap:4}}><Clock size={11}/> {b.readTime}</span>
                      <span style={{display:"flex",alignItems:"center",gap:4}}><User size={11}/> Mampanil Agrotech</span>
                    </div>
                    <h3 style={{fontWeight:800,fontSize:15,color:C.forest,lineHeight:1.4,marginBottom:10}}>{b.title}</h3>
                    <p style={{color:"#999",fontSize:13,lineHeight:1.6,marginBottom:18}}>{b.meta}</p>
                    <span style={{color:C.leaf,fontSize:13,fontWeight:700,display:"flex",alignItems:"center",gap:4}}>
                      Read Full Article <ArrowRight size={14}/>
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.3}>
            <div style={{marginTop:40,background:"white",borderRadius:20,padding:"24px 32px",display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",gap:16,boxShadow:"0 4px 16px rgba(0,0,0,.06)"}}>
              <div>
                <div style={{fontWeight:800,fontSize:16,color:C.forest,marginBottom:4}}>Stay updated on organic gardening</div>
                <div style={{color:"#aaa",fontSize:13}}>Tips, seasonal guides, and product updates — straight to you.</div>
              </div>
              <a href="mailto:mampanilagrotech@gmail.com" style={{background:grad,color:"white",borderRadius:999,padding:"11px 24px",fontSize:13,fontWeight:700,textDecoration:"none",display:"flex",alignItems:"center",gap:6}}>
                <Mail size={14}/> Contact Us
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── CONTACT ── */}
      <div id="contact" style={{background:"white",padding:"80px 20px"}}>
        <div style={{maxWidth:1140,margin:"0 auto"}}>
          <FadeIn>
            <div style={{textAlign:"center",marginBottom:56}}>
              <span style={{color:C.leaf,fontSize:11,fontWeight:700,letterSpacing:4,textTransform:"uppercase"}}>Reach Us</span>
              <h2 style={{fontSize:"clamp(1.7rem,3.5vw,2.4rem)",fontWeight:900,color:C.forest,margin:"10px 0 14px"}}>Get In Touch</h2>
              <p style={{color:"#777",fontSize:15}}>Orders, partnerships, bulk inquiries — we'd love to hear from you.</p>
            </div>
          </FadeIn>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:40}}>
            <FadeIn dir="left">
              <div style={{display:"flex",flexDirection:"column",gap:16}}>
                {[
                  { icon:<Mail size={20}/>, title:"Email", val:"mampanilagrotech@gmail.com", href:"mailto:mampanilagrotech@gmail.com" },
                  { icon:<Globe size={20}/>, title:"Website", val:"www.mampanilagrotech.com", href:"https://www.mampanilagrotech.com" },
                ].map(c=>(
                  <div key={c.title} style={{background:C.cream,borderRadius:16,padding:"18px 20px",display:"flex",alignItems:"center",gap:14,border:"1px solid #e8f5e9"}}>
                    <div style={{width:44,height:44,borderRadius:12,background:"#e8f5e9",display:"flex",alignItems:"center",justifyContent:"center",color:C.leaf,flexShrink:0}}>{c.icon}</div>
                    <div>
                      <div style={{fontWeight:700,fontSize:12,color:C.forest,marginBottom:2}}>{c.title}</div>
                      <a href={c.href} target="_blank" rel="noopener noreferrer" style={{color:"#888",fontSize:13,textDecoration:"none"}}>{c.val}</a>
                    </div>
                  </div>
                ))}
                <div style={{background:C.cream,borderRadius:16,padding:"18px 20px",border:"1px solid #e8f5e9"}}>
                  <div style={{fontWeight:700,fontSize:12,color:C.forest,marginBottom:14}}>Follow Us</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:10}}>
                    {[{icon:<Instagram size={16}/>,l:"Instagram",bg:"#e1306c",h:"#"},{icon:<Facebook size={16}/>,l:"Facebook",bg:"#1877f2",h:"#"},{icon:<Linkedin size={16}/>,l:"LinkedIn",bg:"#0077b5",h:"#"}].map(s=>(
                      <a key={s.l} href={s.h} target="_blank" rel="noopener noreferrer" style={{background:s.bg,color:"white",borderRadius:999,padding:"8px 16px",fontSize:12,fontWeight:600,textDecoration:"none",display:"flex",alignItems:"center",gap:5}}>
                        {s.icon}{s.l}
                      </a>
                    ))}
                  </div>
                </div>
                <div style={{background:grad,borderRadius:16,padding:"20px 24px",textAlign:"center"}}>
                  <Logo sz={60}/>
                  <div style={{color:"white",fontWeight:800,fontSize:15,fontFamily:"Georgia,serif",marginTop:8}}>Mampanil Agrotech LLP</div>
                  <div style={{color:"rgba(255,255,255,.6)",fontSize:11,marginTop:4,letterSpacing:2}}>SUSTAINABLE AGRITECH</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn dir="right" delay={0.1}>
              <div style={{background:C.cream,borderRadius:28,padding:36,border:"1px solid #e8f5e9"}}>
                <div style={{fontWeight:800,fontSize:18,color:C.forest,marginBottom:6}}>Send a Message</div>
                <div style={{color:"#bbb",fontSize:13,marginBottom:24}}>We'll respond within 24 hours.</div>
                {done ? (
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:200,textAlign:"center"}}>
                    <div style={{width:64,height:64,borderRadius:"50%",background:"#e8f5e9",display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16}}>
                      <CheckCircle size={36} color={C.leaf}/>
                    </div>
                    <div style={{fontWeight:800,fontSize:18,color:C.forest}}>Thank you!</div>
                    <div style={{color:"#aaa",fontSize:13,marginTop:6}}>We'll get back to you shortly.</div>
                  </div>
                ) : (
                  <div style={{display:"flex",flexDirection:"column",gap:14}}>
                    {[{k:"nm",l:"Full Name",t:"text",p:"Your full name",v:nm,s:setNm},{k:"em",l:"Email Address",t:"email",p:"your@email.com",v:em,s:setEm},{k:"ph",l:"Phone Number",t:"tel",p:"+91 98765 43210",v:ph,s:setPh}].map(f=>(
                      <div key={f.k}>
                        <div style={{fontSize:12,fontWeight:600,color:C.forest,marginBottom:5}}>{f.l}</div>
                        <input type={f.t} placeholder={f.p} value={f.v} onChange={e=>f.s(e.target.value)}
                          style={{width:"100%",border:"1px solid #e0e0e0",borderRadius:12,padding:"11px 14px",fontSize:14,outline:"none",background:"white",boxSizing:"border-box"}}/>
                      </div>
                    ))}
                    <div>
                      <div style={{fontSize:12,fontWeight:600,color:C.forest,marginBottom:5}}>Message</div>
                      <div contentEditable suppressContentEditableWarning onInput={e=>setMsg(e.currentTarget.textContent)}
                        style={{border:"1px solid #e0e0e0",borderRadius:12,padding:"11px 14px",fontSize:14,minHeight:100,outline:"none",color:"#333",lineHeight:1.6,background:"white"}}/>
                    </div>
                    <button onClick={submit} style={{background:grad,color:"white",border:"none",borderRadius:14,padding:"14px 0",width:"100%",fontWeight:700,fontSize:15,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8,marginTop:4}}>
                      Send Message <ArrowRight size={16}/>
                    </button>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* ── FOOTER ── */}
      <div style={{background:`linear-gradient(160deg,#0d2a1a,#1a4a2e)`,padding:"60px 20px 32px"}}>
        <div style={{maxWidth:1140,margin:"0 auto"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",gap:40,marginBottom:48}}>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:16}}>
                <div style={{background:"white",borderRadius:"50%",padding:8}}><Logo sz={42}/></div>
                <div>
                  <div style={{color:"white",fontWeight:800,fontSize:14}}>Mampanil Agrotech</div>
                  <div style={{color:"rgba(255,255,255,.4)",fontSize:10,letterSpacing:2}}>LLP · SUSTAINABLE AGRITECH</div>
                </div>
              </div>
              <p style={{color:"rgba(255,255,255,.5)",fontSize:13,lineHeight:1.7,margin:0}}>Making sustainable gardening simple and accessible for everyone. Your choice makes a difference.</p>
            </div>
            <div>
              <div style={{color:"rgba(255,255,255,.6)",fontSize:11,fontWeight:700,letterSpacing:3,textTransform:"uppercase",marginBottom:16}}>Navigate</div>
              {[["home","Home"],["why","Why Navjeev"],["about","About Us"],["blog","Blog"],["contact","Contact"]].map(([id,l])=>(
                <button key={id} onClick={()=>go(id)} style={{display:"block",color:"rgba(255,255,255,.55)",background:"none",border:"none",cursor:"pointer",padding:"4px 0",fontSize:13,textAlign:"left"}}>{l}</button>
              ))}
            </div>
            <div>
              <div style={{color:"rgba(255,255,255,.6)",fontSize:11,fontWeight:700,letterSpacing:3,textTransform:"uppercase",marginBottom:16}}>Product</div>
              {["Navjeev Vermicompost (1kg)","Dosage Guide","Application Tips","Nutrient Profile"].map(l=>(
                <div key={l} style={{color:"rgba(255,255,255,.45)",fontSize:13,padding:"4px 0"}}>{l}</div>
              ))}
            </div>
            <div>
              <div style={{color:"rgba(255,255,255,.6)",fontSize:11,fontWeight:700,letterSpacing:3,textTransform:"uppercase",marginBottom:16}}>Contact</div>
              <div style={{color:"rgba(255,255,255,.55)",fontSize:13,marginBottom:8}}>mampanilagrotech@gmail.com</div>
              <div style={{color:"rgba(255,255,255,.55)",fontSize:13,marginBottom:16}}>www.mampanilagrotech.com</div>
              <div style={{display:"flex",gap:10}}>
                {[{icon:<Instagram size={16}/>,h:"#"},{icon:<Facebook size={16}/>,h:"#"},{icon:<Linkedin size={16}/>,h:"#"}].map((s,i)=>(
                  <a key={i} href={s.h} style={{width:36,height:36,borderRadius:"50%",background:"rgba(255,255,255,.1)",display:"flex",alignItems:"center",justifyContent:"center",color:"rgba(255,255,255,.7)",textDecoration:"none",border:"1px solid rgba(255,255,255,.15)"}}>
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div style={{borderTop:"1px solid rgba(255,255,255,.1)",paddingTop:24,display:"flex",flexWrap:"wrap",justifyContent:"space-between",alignItems:"center",gap:12}}>
            <div style={{color:"rgba(255,255,255,.25)",fontSize:12}}>© 2025 Mampanil Agrotech LLP. All rights reserved.</div>
            <div style={{color:"rgba(255,255,255,.25)",fontSize:12}}>Best before 3 years from manufacturing date · 100% Organic</div>
          </div>
        </div>
      </div>
    </div>
  );
}
