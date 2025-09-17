// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { Facebook, FacebookIcon, Instagram,InstagramIcon,Twitter, TwitterIcon} from "lucide-react"
function Footer() {
  return (
    <footer style={{ background: "#faf1f1ff", color: "#727171ff", padding: "30px" }}>
      {/* Main Footer */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px", textAlign: "left" }}>
        
        {/* Brand */}
        <div>
           <div className="text-xl font-extrabold cursor-pointer">
          <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-700 bg-clip-text text-transparent animate-gradient">
            Memories
          </span>
        </div>
          <p>Preserving your college fest moments in a digital album.</p>
          <div style={{ marginTop: "10px",  display:'flex'}}>
            <a href="#" style={{ marginRight: "10px", color: "#0f0f0fff" }}><InstagramIcon/></a>
            <a href="#" style={{ marginRight: "10px", color: "#181818ff" }}><TwitterIcon/></a>
            <a href="#" style={{ color: "#050505ff" }}><FacebookIcon/></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ color: "black" , font:"medium", fontSize:"19px"}}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="#" style={{ color: "#727171ff" }}>Home</a></li>
            <li><a href="#" style={{ color: "#727171ff" }}>Golden Moments</a></li>
            <li><a href="#" style={{ color: "#727171ff" }}>Gallery</a></li>
            <li><a href="#" style={{ color: "#727171ff" }}>Search</a></li>
            <li><a href="#" style={{ color: "#727171ff" }}>Profile</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 style={{ color: "black", fontSize:"19px" }}>Support</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="#" style={{ color: "#727171ff" }}>Contact Us</a></li>
            <li><a href="#" style={{ color: "#727171ff" }}>Help Center</a></li>
            <li><a href="#" style={{ color: "#727171ff" }}>Privacy Policy</a></li>
            <li><a href="#" style={{ color: "#727171ff" }}>Terms of Service</a></li>
            <li><a href="#" style={{ color: "#727171ff" }}>Cookie Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 style={{ color: "black", fontSize:"19px" }}>Get in Touch</h3>
          <p>Email: hello@memories.college</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Location: Campus Hub</p>
          <p style={{ marginTop: "10px", fontStyle: "italic", color: "#9f7aea" }}>
            "Capturing moments, creating memories"
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid #444", marginTop: "20px", paddingTop: "10px", textAlign: "center" }}>
        <p>
          © {new Date().getFullYear()} Memories.  
        </p>
       
      </div>
    </footer>
  );
}

export default Footer;
