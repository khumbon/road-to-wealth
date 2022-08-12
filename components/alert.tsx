import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'
import Image from 'next/image'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn('border-b', {
        'bg-neutral-800 border-neutral-800 text-white': preview,
        'bg-neutral-50 border-neutral-200': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
        <div style={{width: '1920px', height: '1000px', backgroundImage: 'url(/assets/blog/images/Banner2.png)', backgroundRepeat: 'no-repeat', 
clip:'rect(350px,1920px,952px,0px)', position:'absolute'}}/>
          {preview ? (
            <>
              This page is a preview.{' '}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Click here
              </a>{' '}
              to exit preview mode.
            </>
          ) : (
            <>
              The source code for this blog is{' '}
              <a
                href={`https://github.com/vercel/next.js/tree/canary/examples/${EXAMPLE_PATH}`}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                available on GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Alert

/**        <div style={{position: 'relative', width: '100%', height: '0', paddingTop: '60.0000%',
 paddingBottom: '48px', boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)', marginTop: '1.6em', marginBottom: '0.9em', overflow: 'hidden',
 borderRadius: '8px', willChange: 'transform'}}>
            <iframe loading="lazy" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, border: 'none', padding: 0, margin: 0, }}
    src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAEpUt3Y1BM&#x2F;view?embed" allow="fullscreen">
  </iframe>
          </div> */