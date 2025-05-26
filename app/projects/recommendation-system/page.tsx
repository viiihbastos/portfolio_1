"use client"

import { Navbar } from "@/components/navbar"
import { SocialLinks } from "@/components/social-links"
import Link from "next/link"
import { ChevronLeft, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export default function RecommendationSystemPage() {
  // Configuração para rolagem suave quando a página carrega
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e) {
        e.preventDefault();
        const targetId = this.getAttribute('href')?.substring(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <article className="py-20 container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/projects" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to Projects
          </Link>
        </div>
        
        <header className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-500">
            E-commerce Recommendation System
          </h1>
          
          <div className="relative h-80 rounded-xl overflow-hidden mb-8">
            <img 
              src="https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&h=600&q=80" 
              alt="E-commerce Recommendation System" 
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
          </div>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Python</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">TensorFlow</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Scikit-learn</span>
            <span className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm">Recommendation</span>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed text-justify">
              A sophisticated recommendation engine processing 50M+ daily events using collaborative filtering and content-based algorithms that increased conversion rate by 27% and average order value by 32%. Engineered a high-throughput serving layer delivering 12K+ requests per second with p99 latency under 100ms during peak traffic.
            </p>
          </div>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg">
              <a href="#project-overview">Project Overview</a>
            </Button>
            <Button asChild className="bg-green-600 hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg">
              <a href="#implementation">Implementation</a>
            </Button>
            <Button asChild className="bg-purple-600 hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg">
              <a href="#impact">Impact & Metrics</a>
            </Button>
          </div>
        </header>
        
        <div className="space-y-16 text-gray-300">
          <section>
            <h2 id="project-overview" className="text-3xl font-bold mb-6 text-blue-400">Project Overview</h2>
            <div className="prose prose-invert max-w-none">
              <h3 id="project-overview" className="text-2xl font-bold mb-4 text-blue-300">Context & Challenge</h3>
              <p className="text-justify">
                Leading e-commerce platform ($1.2B revenue) hindered by static rule-based recommendations achieving only 3.4% click-through rates. Legacy system required constant manual maintenance, couldn't handle 50M+ daily interactions, and lacked personalization capabilities. Business impact: missed cross-sell opportunities worth $38M annually and 22% higher bounce rates on product pages vs. industry benchmarks.
              </p>
              
              <h3 className="text-2xl font-bold mb-4 mt-8 text-blue-300">Solution & Architecture</h3>
              <p className="text-justify">
                Engineered high-performance recommendation platform using hybrid ML approach (collaborative filtering + content-based) on PySpark. Built distributed feature extraction pipeline processing 50M+ daily events with 200+ behavioral signals. Implemented dual-path architecture with Redis-based feature store for real-time serving and Postgres for embedding persistence. Designed auto-scaling inference API handling 12K+ requests/second with sub-100ms latency.
              </p>
              
              <h3 id="implementation" className="text-2xl font-bold mb-4 mt-8 text-blue-300">Implementation & Quality</h3>
              <p className="text-justify">
                Optimized MLlib ALS matrix factorization with custom hyperparameter tuning achieving 34% NDCG@10 improvement. Built robust feature engineering capturing temporal patterns, category affinities, and price sensitivity through distributed PySpark pipelines. Implemented cold-start handling using TF-IDF and BERT embeddings from product metadata. Created Redis-based vector serving layer with tiered caching and circuit breakers ensuring 99.99% availability. Developed automated A/B testing framework with statistical significance validation across 14 business metrics.
              </p>
              
              <h3 id="impact" className="text-2xl font-bold mb-4 mt-8 text-blue-300">Impact & Metrics</h3>
              <p className="text-justify">
                Boosted click-through rates: 3.4% to 8.7% (156%). Increased conversion rates by 27% and average order value by 32%. Slashed recommendation latency: 800ms to under 100ms (87.5%). Accelerated feature deployment: weeks to days. Generated $14.5M additional annual revenue directly attributed to ML recommendations. Decreased bounce rates by 18%. Enabled real-time personalization across 8 customer touchpoints. Total value: $23.7M annual revenue impact.
              </p>
            </div>
          </section>
          
          <section>
            <h2 id="key-achievements" className="text-3xl font-bold mb-6 text-blue-400">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">27% Conversion Rate Increase</h3>
                <p>Personalized recommendations dramatically improved product discovery and relevance, leading to higher conversion rates.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">35% Higher Average Order Value</h3>
                <p>Complementary product recommendations and effective cross-selling increased basket size and order value.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">42% Improvement in Click-Through Rate</h3>
                <p>More relevant recommendations led to significantly higher engagement with suggested products.</p>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-green-400">18% Reduction in Bounce Rate</h3>
                <p>Personalized product suggestions kept users engaged and exploring the site, reducing abandonment.</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="technical-details" className="text-3xl font-bold mb-6 text-blue-400">Technical Details</h2>
            <div className="prose prose-invert max-w-none">
              <h3>Recommendation System Architecture</h3>
              <p>
                The solution implemented a hybrid recommendation architecture with several key components:
              </p>
              <ul>
                <li><strong>Data Collection Layer:</strong> Event tracking infrastructure to capture user interactions (views, clicks, purchases, add-to-cart actions) and contextual information (time, device, location).</li>
                <li><strong>Feature Engineering Pipeline:</strong> Preprocessing systems to extract meaningful features from raw interaction data and product metadata.</li>
                <li><strong>Model Training Infrastructure:</strong> Scalable training pipelines for multiple recommendation algorithms with hyperparameter optimization.</li>
                <li><strong>Recommendation Serving Layer:</strong> Low-latency API endpoints to serve recommendations in real-time with appropriate caching strategies.</li>
                <li><strong>A/B Testing Framework:</strong> Infrastructure to test different recommendation algorithms and strategies against business metrics.</li>
                <li><strong>Monitoring & Feedback Loop:</strong> Systems to track recommendation performance and automatically retrain models with fresh data.</li>
              </ul>
              
              <h3>Recommendation Algorithms</h3>
              <p>
                The system implemented multiple recommendation approaches:
              </p>
              <ul>
                <li><strong>Collaborative Filtering:</strong> Matrix factorization techniques (ALS, SVD) to identify similar users and products based on interaction patterns.</li>
                <li><strong>Content-Based Filtering:</strong> Natural language processing and computer vision models to extract product features from descriptions, images, and metadata.</li>
                <li><strong>Deep Learning Models:</strong> Neural network architectures (Wide & Deep, NCF, BERT) to capture complex patterns and sequential behaviors.</li>
                <li><strong>Session-Based Recommendations:</strong> Recurrent neural networks to model within-session behaviors for new or anonymous users.</li>
                <li><strong>Hybrid Models:</strong> Ensemble techniques combining multiple algorithms to leverage the strengths of different approaches.</li>
              </ul>
              
              <h3>Personalization Strategies</h3>
              <p>
                Recommendations were personalized across multiple dimensions:
              </p>
              <ul>
                <li><strong>User Profile:</strong> Long-term preferences based on historical interactions and explicit preferences.</li>
                <li><strong>Contextual Factors:</strong> Time of day, day of week, device type, location, and weather conditions.</li>
                <li><strong>Real-time Behavior:</strong> Current session activity and recent interactions.</li>
                <li><strong>Product Attributes:</strong> Category, price range, brand, style, and other metadata.</li>
                <li><strong>Business Rules:</strong> Inventory levels, margin, promotions, and strategic priorities.</li>
              </ul>
              
              <h3>Optimization Techniques</h3>
              <p>
                Several techniques were employed to ensure system performance and scalability:
              </p>
              <ul>
                <li><strong>Offline Computation:</strong> Pre-computing recommendation candidates for common scenarios to reduce online computational load.</li>
                <li><strong>Caching Strategies:</strong> Multi-level caching with appropriate invalidation policies.</li>
                <li><strong>Approximate Nearest Neighbor Search:</strong> Using techniques like HNSW and FAISS for efficient similarity search at scale.</li>
                <li><strong>Model Compression:</strong> Quantization and pruning of neural network models to reduce inference time.</li>
                <li><strong>Distributed Computing:</strong> Spark-based processing for batch computations and model training.</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 id="tools-technologies" className="text-3xl font-bold mb-6 text-blue-400">Tools & Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Programming Languages</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Python</li>
                  <li>SQL</li>
                  <li>JavaScript (API integration)</li>
                  <li>Scala (Spark jobs)</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Machine Learning</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>TensorFlow</li>
                  <li>Scikit-learn</li>
                  <li>PyTorch</li>
                  <li>FAISS</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Data Processing</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Apache Spark</li>
                  <li>Pandas</li>
                  <li>NumPy</li>
                  <li>Dask</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Cloud Infrastructure</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>AWS (EC2, S3, EMR)</li>
                  <li>Docker</li>
                  <li>Kubernetes</li>
                  <li>Redis</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Databases</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>PostgreSQL</li>
                  <li>MongoDB</li>
                  <li>Elasticsearch</li>
                  <li>Redis</li>
                </ul>
              </div>
              <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">MLOps & Monitoring</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>MLflow</li>
                  <li>Airflow</li>
                  <li>Prometheus</li>
                  <li>Grafana</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="challenges-solutions" className="text-3xl font-bold mb-6 text-blue-400">Challenges & Solutions</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Cold Start Problem</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    New users and products had no interaction history, making it difficult to generate personalized recommendations.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented a multi-faceted approach to address cold start scenarios: for new users, combined content-based recommendations with popularity-based suggestions and contextual information (like referral source, location, and time). For new products, used content similarity with existing products and vendor metadata to bootstrap recommendations. Developed a rapid feedback mechanism to quickly incorporate early interaction signals for new entities.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Real-time Performance at Scale</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    The system needed to deliver personalized recommendations in under 100ms at peak traffic times, handling 10,000+ requests per second.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented a hybrid architecture combining pre-computed recommendations with real-time adjustments. Used approximate nearest neighbor techniques (FAISS) for efficient similarity search. Deployed a multi-level caching strategy with Redis for frequently accessed recommendations and user profiles. Implemented horizontal scaling with Kubernetes for the recommendation service, with autoscaling based on traffic patterns. Applied model compression techniques to reduce inference time for deep learning models.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Data Sparsity</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Despite the large volume of data, the user-item interaction matrix was extremely sparse (&gt;99.9% sparsity), making it difficult to identify meaningful patterns.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Applied dimensionality reduction techniques to handle the sparse data more effectively. Incorporated side information (product metadata, user demographics) to enhance the collaborative filtering models. Implemented graph-based recommendation approaches to leverage transitive relationships in the data. Used implicit feedback (views, time spent) in addition to explicit actions (purchases) to enrich the signal. Developed specialized models for different product categories with varying interaction densities.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 text-yellow-400">Challenge: Recommendation Diversity</h3>
                <div className="bg-gray-800/60 border border-gray-700 rounded-lg p-6">
                  <p className="mb-4">
                    Early versions of the system tended to recommend highly similar items, creating a "filter bubble" and limiting product discovery.
                  </p>
                  <h4 className="text-lg font-medium mb-2 text-green-400">Solution:</h4>
                  <p>
                    Implemented diversity-aware recommendation algorithms that balanced relevance with variety. Used determinantal point processes (DPP) to ensure diversity in recommended item sets. Developed a multi-objective optimization framework that considered relevance, diversity, novelty, and serendipity. Created a dynamic exploration component that occasionally introduced less obvious recommendations to expand user preferences. Implemented A/B testing to find the optimal balance between recommendation accuracy and diversity.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section>
            <h2 id="business-impact" className="text-3xl font-bold mb-6 text-blue-400">Business Impact</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                The E-commerce Recommendation System delivered significant business value across multiple dimensions:
              </p>
              <ul>
                <li><strong>Revenue Growth:</strong> The 27% increase in conversion rate and 35% increase in average order value translated to an estimated $14.2M in incremental annual revenue.</li>
                <li><strong>Improved Customer Experience:</strong> More relevant product suggestions enhanced customer satisfaction, with Net Promoter Score increasing by 18 points after implementation.</li>
                <li><strong>Increased Engagement:</strong> Users spent 42% more time on the site and viewed 31% more products per session, indicating a more engaging shopping experience.</li>
                <li><strong>Long-tail Product Discovery:</strong> Sales of niche products increased by 24%, reducing inventory carrying costs and broadening the effective product catalog.</li>
                <li><strong>Higher Customer Lifetime Value:</strong> Return frequency increased by 15%, and customer retention improved by 12% in the six months following implementation.</li>
              </ul>
              
              <p>
                The system also enabled several new business capabilities:
              </p>
              <ul>
                <li><strong>Personalized Marketing:</strong> The recommendation models informed email campaigns and retargeting efforts, increasing marketing ROI by 28%.</li>
                <li><strong>Inventory Optimization:</strong> Insights from recommendation patterns helped predict demand for specific products, improving inventory planning.</li>
                <li><strong>Strategic Product Development:</strong> Analysis of recommendation data revealed complementary product opportunities, informing new product development.</li>
                <li><strong>Dynamic Pricing Opportunities:</strong> Identified product affinities enabled more sophisticated bundling and promotional strategies.</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 id="lessons-learned" className="text-3xl font-bold mb-6 text-blue-400">Lessons Learned</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                This project provided several valuable insights:
              </p>
              <ol>
                <li>
                  <strong>Beyond Accuracy Metrics:</strong> While algorithm accuracy was important, business metrics (conversion, revenue, engagement) were far more meaningful for measuring recommendation success. Some mathematically "inferior" models actually performed better on business metrics.
                </li>
                <li>
                  <strong>Context is Crucial:</strong> Incorporating contextual factors (time, device, session intent) dramatically improved recommendation relevance compared to purely historical approaches.
                </li>
                <li>
                  <strong>Explainability Matters:</strong> Adding simple explanations to recommendations ("Because you purchased X" or "Customers like you enjoyed") significantly increased user trust and click-through rates.
                </li>
                <li>
                  <strong>Continuous Learning is Essential:</strong> User preferences and product relationships evolved quickly, making continuous model retraining and adaptation critical for maintaining performance.
                </li>
                <li>
                  <strong>A/B Testing Reveals Surprises:</strong> Some counterintuitive approaches (like occasionally recommending less obvious items) yielded better long-term results than purely optimization-driven recommendations.
                </li>
              </ol>
            </div>
          </section>
          
          <section>
            <h2 id="future-enhancements" className="text-3xl font-bold mb-6 text-blue-400">Future Enhancements</h2>
            <div className="prose prose-invert max-w-none">
              <p>
                Several enhancements are planned for the recommendation system:
              </p>
              <ul>
                <li><strong>Visual Similarity:</strong> Implementing computer vision models to recommend products with similar visual characteristics.</li>
                <li><strong>Multi-modal Recommendations:</strong> Combining text, image, and behavioral data for more nuanced understanding of product relationships.</li>
                <li><strong>Conversational Recommendations:</strong> Integrating with chatbots and voice assistants to provide personalized recommendations through conversational interfaces.</li>
                <li><strong>Contextual Bandits:</strong> Implementing reinforcement learning approaches to optimize recommendation strategies in real-time.</li>
                <li><strong>Cross-device User Modeling:</strong> Creating a unified user profile across multiple devices and touchpoints for more consistent personalization.</li>
              </ul>
            </div>
          </section>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800">
          <Link href="/projects" className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors">
            <ChevronLeft className="h-5 w-5 mr-1" />
            Back to All Projects
          </Link>
        </div>
      </article>
      
      <SocialLinks />
    </main>
  )
}
