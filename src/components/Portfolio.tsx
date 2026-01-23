import { ArrowLeft, Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

interface PortfolioProps {
  onBack: () => void;
}

export default function Portfolio({ onBack }: PortfolioProps) {
  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="border-b border-white/10 backdrop-blur-sm sticky top-0 z-10 bg-black/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-light">Back</span>
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-16 pb-12 border-b border-white/10">
          <h1 className="text-5xl sm:text-6xl font-light mb-6 tracking-tight">
            Shashank Srivastava
          </h1>
          <div className="flex flex-wrap gap-4 text-white/60 text-sm font-light">
            <a href="mailto:s.srivastava@rgu.ac.uk" className="flex items-center space-x-2 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
              <span>s.srivastava@rgu.ac.uk</span>
            </a>
            <a href="tel:+447825198824" className="flex items-center space-x-2 hover:text-white transition-colors">
              <Phone className="w-4 h-4" />
              <span>+44 7825 198824</span>
            </a>
            <a href="https://linkedin.com/in/ironbatshashank" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
              <span>linkedin.com/in/ironbatshashank</span>
            </a>
            <a href="https://github.com/ironbatshashank" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors">
              <Github className="w-4 h-4" />
              <span>github.com/ironbatshashank</span>
            </a>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>London, UK</span>
            </div>
          </div>
        </header>

        <section className="mb-16">
          <h2 className="text-3xl font-light mb-6 pb-2 border-b border-white/10">Summary</h2>
          <p className="text-white/70 leading-relaxed font-light">
            Product manager with a master's in big data science and working on high-impact projects.
            Major work in machine learning and AI with experience in multiple domains and strong
            problem-solving and soft skills. Full rights to work in the UK with a global talent visa.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-light mb-8 pb-2 border-b border-white/10">Work Experience</h2>
          <div className="space-y-10">
            <div>
              <h3 className="text-xl font-normal mb-1">KTP Associate</h3>
              <p className="text-white/60 text-sm font-light mb-4">Robert Gordon University | May 2024 - Present | Edinburgh, Scotland</p>
              <ul className="space-y-2 text-white/70 font-light">
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Performed customer reviews for problem identification, and developed marketing strategies around technical product modules</span></li>
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Created a marketing and business plan, achieving sales with the whole project and individual modules as add-ons</span></li>
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Developed computer vision-enabled weighbridges for unmanned operation and effective data collection and analysis</span></li>
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Collaborated with multiple stakeholders to align the project with the company's vision in agile methodologies</span></li>
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Developed machine learning pipelines to predict faults and saved engineers time and stock wastage</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-normal mb-1">Machine Learning Engineer</h3>
              <p className="text-white/60 text-sm font-light mb-4">ScaleAI | January 2024 - April 2024 | London, United Kingdom</p>
              <ul className="space-y-2 text-white/70 font-light">
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Fine-tuned LLM models for specific use cases of programming with multiple constraints</span></li>
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Reduced hallucinations from the LLM based on token limits and input constraints</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-normal mb-1">Computer Vision Engineer</h3>
              <p className="text-white/60 text-sm font-light mb-4">Jenesys AI | September 2023 - December 2023 | London, United Kingdom</p>
              <ul className="space-y-2 text-white/70 font-light">
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Developed the vision transformer for a multi-modal approach to handle clients for accounting services</span></li>
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Developed an ensemble consisting of detection and recognition models for intelligent document processing</span></li>
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Built a commensurate product to AWS textract for intelligent document processing with no cost processing</span></li>
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Developed and trained in-house multi-modal for consisting of LLM and vision-based model for fraud detection in invoices and accounting</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-normal mb-1">Machine Learning Engineer</h3>
              <p className="text-white/60 text-sm font-light mb-4">Agave Networks | June 2023 - August 2023 | London, United Kingdom</p>
              <ul className="space-y-2 text-white/70 font-light">
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Created a computer vision model based on the latest yolo models for scrap detection</span></li>
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Built a multi-model approach from scratch for object detection and classification</span></li>
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Managed a team of 6 contractors for data refinement</span></li>
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Created pipelines for easy flow of data among suppliers, labelers, and our training pipelines</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-normal mb-1">Junior Machine Learning Engineer</h3>
              <p className="text-white/60 text-sm font-light mb-4">VCA Technology | May 2022 - May 2023 | London, United Kingdom</p>
              <ul className="space-y-2 text-white/70 font-light">
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Improved the accuracy of the DL filter model (YOLO) from 96% to 97% by increasing data granularity</span></li>
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Built a custom validation library for testing DL object detection models and increased data utilisation by 15%</span></li>
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Built an auto-labeling ensemble using 13 in-house and 7 open-source models, achieving an 80% accuracy and saving the company $10,000 per month</span></li>
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Extended the deep learning object detection model to support thermal and infrared images</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-normal mb-1">Junior Financial Analyst</h3>
              <p className="text-white/60 text-sm font-light mb-4">Gemini Capital LLP | June 2020 - February 2021 | London, United Kingdom</p>
              <ul className="space-y-2 text-white/70 font-light">
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Automated the parsing of financial PDFs by implementing NLP to extract relevant financial information for 70 companies including indices and commodities, replacing two financial analysts</span></li>
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Created an internal visualisation tool on Excel to track and analyse 3 private equity portfolios worth £410m</span></li>
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Created a system architecture to automate wealth management and the capacity of clients by 66%</span></li>
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Managed and trained 2 financial analysts on automated systems</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-normal mb-1">Teaching Assistant (Social Networks)</h3>
              <p className="text-white/60 text-sm font-light mb-4">Queen Mary, University of London | January 2022 - May 2023 | United Kingdom</p>
              <ul className="space-y-2 text-white/70 font-light">
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Assessed students on using Gephi and networkX to analyse networks and create projects using Stanford Snap data</span></li>
                <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Graded students for digital media and social networks module achieving an overall pass rate of 94% for directly mentored students and overall groups</span></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-light mb-8 pb-2 border-b border-white/10">Education</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-normal mb-1">MSc in Data Science (Distinction)</h3>
              <p className="text-white/60 text-sm font-light mb-3">Queen Mary, University of London | 2021 - 2022</p>
              <p className="text-white/70 font-light mb-2"><span className="text-white/50">Modules:</span> Neural Networks, NLP, Data Mining, Machine Learning, Applied Statistics, Big Data</p>
              <p className="text-white/70 font-light"><span className="text-white/50">Thesis:</span> A comparative study of Quant models for forex trading, supervised by a Alan Turing Institute fellow</p>
            </div>

            <div>
              <h3 className="text-xl font-normal mb-1">BTech in Computer Science (87%)</h3>
              <p className="text-white/60 text-sm font-light mb-3">GGSIP University | 2016 - 2020</p>
              <p className="text-white/70 font-light mb-2">Scored in the top 2% (5th out of 300 students)</p>
              <p className="text-white/70 font-light mb-2">Head of placement cell</p>
              <p className="text-white/70 font-light"><span className="text-white/50">Modules:</span> AI, Applied Mathematics, Advanced DBMS, Computer Networks, Business Intelligence</p>
            </div>

            <div>
              <h3 className="text-xl font-normal mb-1">A Levels in Science (90%)</h3>
              <p className="text-white/60 text-sm font-light mb-3">The Air Force School | 2014 - 2016</p>
              <p className="text-white/70 font-light mb-2">Scored in the top 1% in the country</p>
              <p className="text-white/70 font-light"><span className="text-white/50">Subjects:</span> Physics, Chemistry, Maths, English, Biology, Computer Science</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-light mb-8 pb-2 border-b border-white/10">Consulting and Volunteer Projects</h2>
          <div>
            <h3 className="text-xl font-normal mb-1">Data Scientist</h3>
            <p className="text-white/60 text-sm font-light mb-4">Energy Unlocked | April 2022 - May 2022 | London, United Kingdom</p>
            <ul className="space-y-2 text-white/70 font-light">
              <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Built a custom data analysis tool used for recording customer data and drawing insights in real time</span></li>
              <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Built a custom LSTM model for predicting user behavior inside the house</span></li>
              <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Built a custom vector to save magnetic fingerprinting of user's houses</span></li>
              <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>An indoor position system was made to determine the position of the user inside the house using a magnetic fingerprinting technique</span></li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-light mb-8 pb-2 border-b border-white/10">Extracurricular Activities</h2>
          <ul className="space-y-3 text-white/70 font-light">
            <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span><span className="text-white">President of the Computer Society</span> - Hosted 4 sponsored hackathons for 250+ students</span></li>
            <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span><span className="text-white">Team Lead</span> - Participated in India's largest Hackathon. Secured 2nd position among 10,000 participants</span></li>
            <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Won best team award out of 20 teams competing for funding in QHack bootcamp</span></li>
            <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Built a computer vision app to scan food items to reduce food wastage in a hackathon sponsored by McKinsey</span></li>
            <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span>Got mentored by Peter Abby (Angel Investor) for 8 weeks for the QIncubator program</span></li>
            <li className="flex space-x-3"><span className="text-white/40 mt-1">•</span><span><span className="text-white">Research Paper</span> - Implemented a concurrency control in IPFS which was published in the Journal of Emerging Technologies in Data Mining and Information Security for blockchain technology</span></li>
          </ul>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-light mb-8 pb-2 border-b border-white/10">Skills</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-normal text-white/90 mb-3">Tools and Languages</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Python, TensorFlow, PyTorch, Keras, Git, Matlab, AWS, R, GCP, Django, DevOps,
                Information Retrieval, YOLO, Dino, Midas, EfficientNet, ResNet, VGG
              </p>
            </div>
            <div>
              <h3 className="text-lg font-normal text-white/90 mb-3">Quantitative Research</h3>
              <p className="text-white/70 font-light leading-relaxed">
                Mathematical Optimization, Mathematical Modeling, Hadoop, Spark, R, SQL,
                Statistical and Econometric Models, Risk Mitigation, Quantitative Analysis
              </p>
            </div>
            <div>
              <h3 className="text-lg font-normal text-white/90 mb-3">Communication</h3>
              <p className="text-white/70 font-light leading-relaxed">
                English IELTS - 7.5, Hindi (fluent speaker)
              </p>
            </div>
            <div>
              <h3 className="text-lg font-normal text-white/90 mb-3">Licenses and Certifications</h3>
              <p className="text-white/70 font-light leading-relaxed">
                CMI Level 5 Diploma in Management
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
