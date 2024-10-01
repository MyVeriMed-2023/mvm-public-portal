// src/utils/dateFormatter.ts

/**
 * Formats a date string into a more readable format.
 * @param dateString - The date string to format (e.g., "2024-08-30 15:15:56.500320").
 * @returns The formatted date string.
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    // hour: '2-digit',
    // minute: '2-digit',
    // second: '2-digit',
  };

  return date.toLocaleDateString(undefined, options);
}

// utils/timeFormatter.ts
export function getRelativeTime(createdDate: string): string {
  const createdTime = new Date(createdDate).getTime();
  const currentTime = new Date().getTime();

  // Calculate the difference in milliseconds
  const differenceInMs = currentTime - createdTime;

  // Convert the difference to seconds, minutes, hours, days, and weeks
  const seconds = Math.floor(differenceInMs / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);

  // Determine the appropriate time display
  if (seconds < 60) {
    return "just now";
  } else if (minutes < 60) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (hours < 24) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (days < 7) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (weeks < 4) {
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else {
    // Return the exact date if older than 4 weeks (customize as needed)
    return new Date(createdDate).toLocaleDateString();
  }
}
