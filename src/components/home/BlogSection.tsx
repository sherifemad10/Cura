import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection: React.FC = () => {
  const { t } = useTranslation();
  
  const blogPosts = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: t('blog.post1.title'),
      date: t('blog.post1.date'),
      views: t('blog.post1.views'),
      author: t('blog.post1.author')
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/5876669/pexels-photo-5876669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: t('blog.post2.title'),
      date: t('blog.post2.date'),
      views: t('blog.post2.views'),
      author: t('blog.post2.author')
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3872370/pexels-photo-3872370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: t('blog.post3.title'),
      date: t('blog.post3.date'),
      views: t('blog.post3.views'),
      author: t('blog.post3.author')
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2 
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-neutral-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Blog
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-neutral-800 dark:text-white">
            {t('blog.title')}
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id}
              className="bg-white dark:bg-neutral-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mb-3">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.views}</span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-neutral-800 dark:text-white">
                  {post.title}
                </h3>
                <Link 
                  to="/" 
                  className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
                >
                  {t('blog.readMore')}
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;