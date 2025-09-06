"use client";

import { useState } from 'react';
import { motion } from "framer-motion";
import {
    ArrowLeft,
    Clock,
    Calendar,
    Users,
    Check,
    ChevronDown,
    Loader2
} from "lucide-react";
import Link from "next/link";
import { services } from '@/lib/services-data';

const timeSlots = [
    { time: '9:00 AM', value: '09:00' },
    { time: '10:00 AM', value: '10:00' },
    { time: '11:00 AM', value: '11:00' },
    { time: '2:00 PM', value: '14:00' },
    { time: '3:00 PM', value: '15:00' },
    { time: '4:00 PM', value: '16:00' },
];

const SuccessMessage = ({ formData }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8"
    >
        <div className="w-16 h-16 bg-[#4ADE80] rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-gray-900" />
        </div>
        <h1 className="text-2xl font-bold mb-4 text-white">Booking Confirmed!</h1>
        <p className="text-white/60 mb-6">
            Thank you for scheduling a consultation! We've sent the details to {formData.email}
        </p>
        <div className="bg-[#1A2333]/20 backdrop-blur-sm p-6 rounded-lg text-left mb-6 border border-white/10">
            <p className="text-white/80 mb-4">Consultation Details:</p>
            <ul className="space-y-2 text-white/60">
                <li>• Date: {new Date(formData.date).toLocaleDateString()}</li>
                <li>• Time: {formData.time}</li>
                <li>• Service: {formData.service}</li>
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/80 mb-4">Next steps:</p>
                <ul className="space-y-2 text-white/60">
                    <li>• Check your email for confirmation and Zoom link</li>
                    <li>• Add the event to your calendar</li>
                    <li>• Prepare any questions you'd like to discuss</li>
                </ul>
            </div>
        </div>
        <Link href="/services">
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#4ADE80] text-gray-900 px-8 py-3 rounded-lg font-medium"
            >
                Back to Services
            </motion.button>
        </Link>
    </motion.div>
);

export default function ConsultationPage() {
    const [step, setStep] = useState(1);
    const [showSuccess, setShowSuccess] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        description: '',
        date: '',
        time: '',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    });

    const handleSubmit = async () => {
        try {
            setIsSubmitting(true);
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1500));
            setShowSuccess(true);
        } catch (error) {
            console.error('Booking error:', error);
            alert('Failed to book consultation. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative min-h-screen pt-24">
            {/* Background Effects */}
            <div className="fixed inset-0 -z-10">
                {/* Dark background */}
                <div className="absolute inset-0 bg-[#0F172A]" />

                {/* Grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Radial gradients */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(74,222,128,0.1),transparent_50%)]" />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(74,222,128,0.1),transparent_50%)]"
                />
            </div>

            <div className="container mx-auto max-w-2xl px-4 py-12">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Schedule a <span className="text-accent">Consultation</span>
                    </h1>
                    <p className="text-white/60 text-lg">
                        Book a free 30-minute consultation to discuss your project needs
                    </p>
                </div>

                {/* Progress Steps */}
                {!showSuccess && (
                    <div className="flex justify-center mb-12">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${s <= step ? 'bg-[#4ADE80] text-gray-900' : 'bg-[#1A2333]/50 text-white/40'
                                    }`}>
                                    {s < step ? <Check className="w-5 h-5" /> : s}
                                </div>
                                {s < 3 && (
                                    <div className={`w-20 h-0.5 ${s < step ? 'bg-[#4ADE80]' : 'bg-[#1A2333]/50'
                                        }`} />
                                )}
                            </div>
                        ))}
                    </div>
                )}

                <div className="bg-[#1A2333]/20 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                    {!showSuccess ? (
                        <>
                            {step === 1 && (
                                <div className="space-y-6">
                                    <div className="text-center mb-8">
                                        <h2 className="text-3xl font-bold mb-2 text-white">Your Information</h2>
                                        <p className="text-white/60">Tell us a bit about yourself</p>
                                    </div>

                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full px-4 py-3 bg-[#1A2333]/30 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:border-[#4ADE80]/50 focus:outline-none transition-colors"
                                        required
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full px-4 py-3 bg-[#1A2333]/30 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:border-[#4ADE80]/50 focus:outline-none transition-colors"
                                        required
                                    />

                                    <input
                                        type="text"
                                        placeholder="Company Name"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="w-full px-4 py-3 bg-[#1A2333]/30 border border-white/10 rounded-lg text-white placeholder:text-white/40 focus:border-[#4ADE80]/50 focus:outline-none transition-colors"
                                    />

                                    <div className="relative">
                                        <select
                                            value={formData.service}
                                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                            className="w-full px-4 py-3 bg-[#1A2333]/30 border border-white/10 rounded-lg text-white appearance-none focus:border-[#4ADE80]/50 focus:outline-none transition-colors"
                                            required
                                        >
                                            <option value="" className="bg-[#1A2333]">Select a service...</option>
                                            {services && services.map((service) => (
                                                <option key={service.num} value={service.title} className="bg-[#1A2333]">
                                                    {service.title}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                                    </div>

                                    <textarea
                                        placeholder="Tell us about your project or requirements..."
                                        value={formData.description}
                                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                        className="w-full px-4 py-3 bg-[#1A2333]/30 border border-white/10 rounded-lg text-white placeholder:text-white/40 h-32 resize-none focus:border-[#4ADE80]/50 focus:outline-none transition-colors"
                                    />

                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        onClick={() => setStep(2)}
                                        className="w-full bg-[#4ADE80] text-gray-900 py-3 rounded-lg font-medium hover:bg-[#4ADE80]/90 transition-colors"
                                    >
                                        Next Step
                                    </motion.button>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="space-y-6">
                                    <div className="text-center mb-8">
                                        <h2 className="text-3xl font-bold mb-2 text-white">Choose Date & Time</h2>
                                        <p className="text-white/60">Select your preferred consultation time</p>
                                    </div>

                                    <div>
                                        <label className="block text-sm text-white/60 mb-2">Select Date</label>
                                        <input
                                            type="date"
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            className="w-full px-4 py-3 bg-[#1A2333]/30 border border-white/10 rounded-lg text-white focus:border-[#4ADE80]/50 focus:outline-none transition-colors"
                                            min={new Date().toISOString().split('T')[0]}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm text-white/60 mb-2">Select Time</label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {timeSlots.map((slot) => (
                                                <button
                                                    key={slot.value}
                                                    onClick={() => setFormData({ ...formData, time: slot.time })}
                                                    className={`p-3 rounded-lg border backdrop-blur-sm transition-all duration-300 ${formData.time === slot.time
                                                            ? 'border-[#4ADE80] bg-[#4ADE80]/10 text-[#4ADE80]'
                                                            : 'border-white/10 bg-[#1A2333]/30 text-white hover:border-white/20'
                                                        }`}
                                                >
                                                    {slot.time}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setStep(1)}
                                            className="w-full border border-white/20 text-white py-3 rounded-lg font-medium bg-[#1A2333]/30 hover:bg-[#1A2333]/50 transition-colors"
                                        >
                                            Back
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setStep(3)}
                                            className="w-full bg-[#4ADE80] text-gray-900 py-3 rounded-lg font-medium hover:bg-[#4ADE80]/90 transition-colors"
                                        >
                                            Next Step
                                        </motion.button>
                                    </div>
                                </div>
                            )}

                            {step === 3 && (
                                <div className="space-y-6">
                                    <div className="text-center mb-8">
                                        <h2 className="text-3xl font-bold mb-2 text-white">Confirm Details</h2>
                                        <p className="text-white/60">Review your consultation details</p>
                                    </div>

                                    <div className="space-y-4 bg-[#1A2333]/30 p-6 rounded-lg border border-white/10">
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-white/60">Name</span>
                                            <span className="text-white font-medium">{formData.name}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-white/60">Email</span>
                                            <span className="text-white font-medium">{formData.email}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-white/60">Company</span>
                                            <span className="text-white font-medium">{formData.company}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-white/60">Service</span>
                                            <span className="text-white font-medium">{formData.service}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-white/60">Date</span>
                                            <span className="text-white font-medium">
                                                {new Date(formData.date).toLocaleDateString('en-US', {
                                                    weekday: 'long',
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-white/60">Time</span>
                                            <span className="text-white font-medium">{formData.time}</span>
                                        </div>
                                    </div>

                                    {formData.description && (
                                        <div className="bg-[#1A2333]/30 p-6 rounded-lg border border-white/10">
                                            <h3 className="text-white/60 mb-2">Description</h3>
                                            <p className="text-white">{formData.description}</p>
                                        </div>
                                    )}

                                    <div className="flex gap-3">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setStep(2)}
                                            className="w-full border border-white/20 text-white py-3 rounded-lg font-medium bg-[#1A2333]/30 hover:bg-[#1A2333]/50 transition-colors"
                                            disabled={isSubmitting}
                                        >
                                            Back
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={handleSubmit}
                                            className="w-full bg-[#4ADE80] text-gray-900 py-3 rounded-lg font-medium hover:bg-[#4ADE80]/90 transition-colors flex items-center justify-center"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                                    Processing...
                                                </>
                                            ) : (
                                                'Confirm Booking'
                                            )}
                                        </motion.button>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <SuccessMessage formData={formData} />
                    )}
                </div>

                {/* Footer Info */}
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white/40">
                    <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>30-minute free consultation</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>Flexible scheduling</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>Expert team members</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
