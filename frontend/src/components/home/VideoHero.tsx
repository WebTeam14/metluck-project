import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import videoFile from "@/assets/video/home-video.mp4";

export function VideoHero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Video */}
      <video
        src={videoFile}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-6xl font-bold text-white mb-4">
            METLUCK
            <span className="block text-primary">GROUP</span>
          </h1>

          <p className="text-white/80 mb-8">
            Delivering excellence in industrial services and engineering.
          </p>

          <div className="flex justify-center gap-4">
            <Link to="/services" className="btn-hero">
              Explore Services
            </Link>

            <Link to="/contact" className="btn-outline-hero">
              Contact Us
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
}