'use client';
import { useState } from 'react';
import styles from './CopyToClipboard.module.scss';
import type { Props } from './CopyToClipboard.types';

const CopyToClipboard = ({ copy }: Props) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(copy);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <button
      className={styles['CopyToClipboard']}
      onClick={() => handleCopy()}
      disabled={copied}
    >
      <div
        className={styles.wrapper}
        data-copied={copied}
      >
        <span>skopiuj</span>
        <PapperClipIcon />
      </div>
      {copied && <SuccessIcon className={styles.successIcon} />}
    </button>
  );
};

export default CopyToClipboard;

const PapperClipIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={17}
    height={16}
    fill='none'
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.424 2.242c1.962-1.878 5.134-1.878 7.095 0a.5.5 0 1 1-.691.722c-1.575-1.507-4.138-1.507-5.713 0l-4.27 4.087a.5.5 0 1 1-.69-.722l4.269-4.087ZM10.678 4.3a.5.5 0 0 1 .707-.016c.837.802.837 2.11 0 2.912l-5.26 5.036a.5.5 0 0 1-.692-.723l5.26-5.035a1.002 1.002 0 0 0 0-1.467.5.5 0 0 1-.015-.707Z'
      fill='#376578'
    />
    <path
      opacity={0.5}
      d='M12.828 2.964a3.705 3.705 0 0 1 0 5.408l-5.3 5.072c-1.006.964-2.647.964-3.653 0a2.353 2.353 0 0 1 0-3.437l5.222-5a1.169 1.169 0 0 1 1.596 0 .5.5 0 0 1 .68-.732 2.169 2.169 0 0 0-2.967.01l-5.223 5a3.353 3.353 0 0 0 0 4.881c1.394 1.334 3.644 1.334 5.037 0l5.3-5.072a4.705 4.705 0 0 0 .01-6.843.5.5 0 0 1-.702.713Z'
      fill='#376578'
    />
  </svg>
);

const SuccessIcon = ({ ...props }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='16'
    height='17'
    fill='none'
    viewBox='0 0 16 17'
    stroke='#5C7360'
    {...props}
  >
    <path
      strokeMiterlimit='10'
      d='M14 8.5c0-3.313-2.688-6-6-6-3.313 0-6 2.688-6 6 0 3.313 2.688 6 6 6 3.313 0 6-2.688 6-6z'
    ></path>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M11 6l-4.2 5L5 9'
    ></path>
  </svg>
);
