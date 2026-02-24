import previewMainRockpaper from '../assets/templates/rockpaper/preview-1.png';
import previewSecondaryRockpaper from '../assets/templates/rockpaper/preview-2.png';

export const templatePreviews: Record<string, { main: string; secondary: string }> = {
	rockpaper: {
		main: previewMainRockpaper.src,
		secondary: previewSecondaryRockpaper.src
	}
};
