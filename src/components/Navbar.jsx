const Navbar = () => {
    return (
      <div className="h-14 w-full flex justify-between items-center px-4" id="navbar-container">
        
        {/* Left Side - Email + CV */}
        <div className="flex items-center gap-4">
          <h2 className="text-gray-600 text-sm">siddharth.official.swe@gmail.com</h2>
          <a 
            href="/siddharth_resume_final.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white px-4 py-2 rounded-3xl border border-gray-600 text-sm"
          >
            CV
          </a>
        </div>
  
        {/* Right Side - Github / Linkedin */}
        <div className="flex items-center gap-2 text-sm">
          <a href="https://github.com/SiddharthsParmar" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Github
          </a>
          <span>/</span>
          <a href="https://www.linkedin.com/in/siddharth-parmar-1245b4240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:underline">
            Linkedin
          </a>
        </div>
  
      </div>
    )
  }
  
  export default Navbar;
  