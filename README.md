# Text Box Auto-Size - Sketch Plugin
This Sketch plugin auto-resizes the bounding box of a text layer. Height is calculated by multiplying the number of lines by the text's respective line-height. The text is then centered vertically inside the bounding box. Any extra space at the end of the text is also trimmed.

This plugin was created to address the random extra top/bottom space that Sketch adds to text bounding boxes. Additionally, this helps when you are attempting to adhere to a baseline grid and need your bounding box to accurately reflect line-height and vertical alignment. 

## Usage
Select a text layer.

**To set the bounding box size:**

Select `Plugins` > `Text Box Auto-Size` > `Set size` or press  `⌘`+ `Shift`+`F`

**To automatically set the text box size when the text changes, enable the auto-size mode:**

Select `Plugins` > `Text Box Auto-Size` > `Toggle auto-size` or press  `⌘`+`ctrl`+`Shift`+`F`