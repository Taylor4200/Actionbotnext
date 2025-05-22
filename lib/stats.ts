// This would be connected to a real database in production
// For now, we'll use a mock API with local data

export interface SiteStats {
  activeUsers: number;
  uptime: number;
  tasksAutomated: number;
  averageRating: number;
  publishedDate: string;
}

// In-memory stats database - in a real app this would be fetched from an API
export const siteStats: SiteStats = {
  activeUsers: 15000,
  uptime: 99.9,
  tasksAutomated: 8000000,
  averageRating: 4.9,
  publishedDate: new Date().toISOString(),
};

/**
 * Get site statistics 
 * This simulates an API call that would fetch real-time stats from a database
 */
export async function getStats(): Promise<SiteStats> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return siteStats;
}

/**
 * Format large numbers with K, M, B suffixes
 */
export function formatNumber(num: number): string {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
}