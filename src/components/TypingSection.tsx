"use client"

import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import * as React from "react"

export default function TypingSection(){

    const [progress, setProgress] = React.useState(13)
 
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])


    const text = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Morbi scelerisque luctus velit. Etiam commodo dui eget wisi. Curabitur vitae diam non enim vestibulum interdum. Praesent dapibus. Phasellus rhoncus. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Duis condimentum augue id magna semper rutrum. Aenean id metus id velit ullamcorper pulvinar."

    return(
        <>
            
            <div className="w-full flex justify-center">
                <div className="w-1/2 flex flex-col justify-center gap-4">
                    <Progress value={progress}  />
                    <Textarea className="resize-none h-[200px] text-xl" placeholder={text} />
                </div>
            </div>
        </>
    )
}