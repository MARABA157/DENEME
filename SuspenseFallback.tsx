import React from 'react';
import { LoadingSpinner } from '@/components/common/LoadingSpinner';

const SuspenseFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <LoadingSpinner size="lg" />
  </div>
);

export default SuspenseFallback;