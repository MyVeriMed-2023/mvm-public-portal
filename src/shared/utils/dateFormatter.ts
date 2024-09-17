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
