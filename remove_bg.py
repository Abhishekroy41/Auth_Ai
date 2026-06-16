from PIL import Image

def remove_white_bg(image_path, output_path):
    img = Image.open(image_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    # threshold for white
    for item in datas:
        # item is (R, G, B, A)
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            newData.append((255, 255, 255, 0)) # transparent
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")

remove_white_bg("public/meta-partner.png", "public/meta-partner.png")
