import React from 'react';
import { useParams } from 'react-router-dom';
import { Shield, FileText, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Legal = () => {
    const { type } = useParams();

    const content = {
        privacy: {
            title: 'Privacy Policy',
            icon: <Shield className="text-blue-400" size={48} />,
            text: 'At Hirealize Consultants, we take your privacy seriously. All candidate and client data is handled with the highest level of confidentiality and in accordance with international data protection standards. We do not sell or share your data with third parties for marketing purposes.'
        },
        terms: {
            title: 'Terms of Service',
            icon: <FileText className="text-blue-400" size={48} />,
            text: 'By using our services, you agree to comply with our professional standards and recruitment protocols. All agreements between clients and Hirealize are governed by our standard engagement terms which ensure quality and compliance throughout the hiring process.'
        },
        disclaimer: {
            title: 'Legal Disclaimer',
            icon: <CheckCircle className="text-blue-400" size={48} />,
            text: 'The information provided on this website is for general informational purposes only. While we strive for accuracy, Hirealize Consultants makes no guarantees regarding the immediate availability of specific roles or the exact timeline for recruitment success.'
        }
    };

    const currentContent = content[type] || content.privacy;

    return (
    <section className="pt-40 pb-24 min-h-screen bg-dark-900 relative">
      <SEO 
        title={`${currentContent.title} | Hirealize Legal`}
        description={`Read the ${currentContent.title} of Hirealize Consultants. We are committed to transparency and compliance in our recruitment services.`}
        keywords="legal, privacy policy, terms of service, disclaimer, hirealize compliance"
        canonical={`https://www.hirealize.in/legal/${type || 'privacy'}`}
      />
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]"></div>
      </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/[0.03] border border-white/10 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-[100px]"></div>

                    <div className="relative z-10 space-y-10">
                        <div className="flex flex-col items-center text-center space-y-6">
                            <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                                {currentContent.icon}
                            </div>
                             <h1 className="text-4xl lg:text-5xl font-display font-bold text-white tracking-tight">
                                {currentContent.title}
                            </h1>
                            <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                        </div>

                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-400 text-lg leading-relaxed font-light">
                                {currentContent.text}
                            </p>
                             <p className="text-gray-500 text-sm leading-relaxed font-light mt-8">
                                For detailed inquiries regarding our legal protocols, please contact our compliance department at <span className="text-blue-400 font-black uppercase tracking-widest text-[10px]">legal@hirealize.com</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </section>
    );
};

export default Legal;
