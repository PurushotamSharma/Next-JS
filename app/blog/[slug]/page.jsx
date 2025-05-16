"use client";
import React from 'react';
import { useRouter, useParams } from 'next/navigation';
import BlogPost from './BlogPost';

export default function Page() {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug;

  const handleBack = () => {
    router.push('/blog');
  };

  return <BlogPost slug={slug} onBack={handleBack} />;
}