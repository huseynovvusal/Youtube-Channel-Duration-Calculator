export function convertISOtoSeconds(duration: string | undefined) {
  if (!duration) return 0

  let totalSeconds = 0
  const regex = /PT(\d+H)?(\d+M)?(\d+S)?/
  const matches = duration.match(regex)

  if (!matches) return 0

  if (matches[1]) totalSeconds += parseInt(matches[1]) * 3600 // Convert hours to seconds
  if (matches[2]) totalSeconds += parseInt(matches[2]) * 60 // Convert minutes to seconds
  if (matches[3]) totalSeconds += parseInt(matches[3]) // Add seconds directly

  return totalSeconds
}

export function formatDuration(seconds: number) {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const secs = seconds % 60
  return `${hours}h ${minutes}m ${secs}s`
}
