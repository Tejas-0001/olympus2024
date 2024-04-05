import React from 'react'
import iiitv from '../../public/iiitv.png'
import Image from 'next/image'
const timeline = () => {
    return (
        <>
            <video className="fixed m-0 p-0 w-full h-screen object-cover -z-10" src="timeline.mp4" autoPlay loop muted></video>
            <main className="flex min-h-fit flex-col items-center justify-between px-8 pt-20 bg-[rgba(0,0,0,.4)] overflow-y-scroll">
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-[#D6D6D6]">
                    <li>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">5|4|2024</time>
                            <div className="text-lg font-black">Olympus</div>
                            Inaguration
                            <ul>
                                <li>18:00 - 18:15 | March Past</li>
                                <li>18:16 - 18:30 | Pledge</li>
                                <li>18:31 - 18:45 | Dance</li>
                                <li>18:46 - 19:00 | Speech</li>
                                <li>19:01 - 20:00 | Show Football Match</li>
                            </ul>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">6|4|2024</time>
                            <div className="text-lg font-black">Day 1</div>
                            <ul>
                                <li>07:00 - 8:15 | Azad Warriors Vs Shastri Strikers (BC)</li>
                                <li>8:30 - 9:45 | Savarkar Soldiers Vs Bose Battalion (BC)</li>
                                <li>10:00 - 11:15 | Lokmanya lions Vs Patel Patriots (BC)</li>
                                <li>11:30 - 12:30 | Ahilya&apos;s pride Vs  Azad Sena (GC)</li>
                                <li>14:00 - 17:00 | Pong Finity</li>
                                <li>17:15 - 18:30 | Alluri Arrows Vs Mangal Sena (BC)</li>
                                <li>19:00 - 20:00 | Jhansi Vs Azad Sena (GF)</li>
                                <li>20:30 - 21:30 | Bhagat Blitzers Vs Freedom strikers (BF)</li>
                                <li>21:31 - 22:31 | Netaji Titans Vs Bharathiyar (BF)</li>
                                <li>22:31 - 23:30 | Veer Subhash squad Vs Freedom Fighter (BF)</li>
                                <li>23:31 - 00:30 | Tilak Titans Vs Shurveer savarkar (BF)</li>
                            </ul>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">7|4|2024</time>
                            <div className="text-lg font-black">Day 2</div>
                            <ul>
                                <li>07:00 - 8:15 | Azad Warriors Vs Patel Patriots (BC)</li>
                                <li>8:30 - 9:45 | Lokmanya lions Vs Shastri Strikers (BC)</li>
                                <li>10:00 - 11:15 | Savarkar Soldiers Vs Alluri Arrows (BC)</li>
                                <li>11:30 - 12:30 |  Azad Sena Vs Manikarnika (GC)</li>
                                <li>14:00 - 17:00 | Pong Finity</li>
                                <li>17:15 - 18:30 | Mangal Sena Vs Bose Battalion (BC)</li>
                                <li>19:00 - 20:00 | Azad Sena Vs Manikarnika (GF)</li>
                                <li>20:30 - 21:30 | Bhagat Blitzers Vs Netaji Titans (BF)</li>
                                <li>21:31 - 22:31 | Freedom strikers Vs Bharathiyar (BF)</li>
                                <li>22:31 - 23:30 | Veer Subhash squad Vs Shurveer savarkar (BF)</li>
                                <li>23:31 - 00:30 | Freedom Fighter Vs Tilak Titans (BF)</li>
                            </ul>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">8|4|2024</time>
                            <div className="text-lg font-black">Day 3</div>
                            <ul>
                                <li>19:00 - 19:30 | Savarkas&apos;s soldiers Vs Savarkar sllammers (BB)</li>
                                <li>19:31 - 20:00 | Bhagat ballers Vs Azad challengers (BB)</li>
                                <li>20:30 - 21:30 | Bhagat Blockers Vs Shaheed-E-Azam spikers (VB)</li>
                                <li>21:31 - 22:30 | Alluri Arrows Vs Subhash Smashers (VB)</li>
                                <li>22:31 - 23:30 | Sadaar spikers Vs Shastri Striker (VB)</li>
                                <li>23:31 - 00:30 | Canwe Comrades Vs Maharana ki sena (VB)</li>
                            </ul>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">9|4|2024</time>
                            <div className="text-lg font-black">Day 4</div>
                            <ul>
                                <li>17:15 - 18:30 | Azad Warriors Vs Lokmanya lions (BC)</li>
                                <li>19:00 - 19:30 | Shastri Shooters Vs Savarkar sllammers (BB)</li>
                                <li>19:31 - 20:00 | Bhagatt ballers Vs Shastri Strikers (BB)</li>
                                <li>20:30 - 21:30 | Bhagat Blockers Vs Alluri Arrows (VB)</li>
                                <li>21:31 - 22:30 | Shaheed-E-Azam spikers Vs Subhash Smashers (VB)</li>
                                <li>22:31 - 23:30 | Sadaar spikers Vs Canwe Comrades (VB)</li>
                                <li>23:31 - 00:30 | Shastri Striker Vs Maharana ki sena (VB)</li>
                            </ul>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">10|4|2024</time>
                            <div className="text-lg font-black">Day 5</div>
                            <ul>
                                <li>17:15 - 18:30 | Savarkar Soldiers Vs Mangal Sena (BC)</li>
                                <li>19:00 - 19:30 | Shastri Shooters Vs Savarkas&apos;s soldiers (BB)</li>
                                <li>19:31 - 20:00 | Shastri Strikes  Vs Azaad challengers (BB)</li>
                                <li>20:30 - 21:30 | Bhagat Blockers Vs Subhash Smashers (VB)</li>
                                <li>21:31 - 22:30 | Sadaar spikers Vs  Maharana ki sena (VB)</li>
                                <li>22:31 - 23:30 | Shaheed-E-Azam spikers Vs Alluri Arrows (VB)</li>
                                <li>23:31 - 00:30 | Shastri Striker  Vs Canwe Comrades (VB)</li>
                            </ul>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">11|4|2024</time>
                            <div className="text-lg font-black">Day 6</div>
                            <ul>
                                <li>07:00 - 8:15 | Patel Patriots Vs Shastri Strikers (BC)</li>
                                <li>8:30 - 9:45 | Alluri Arrows Vs Bose Battalion (BC)</li>
                                <li>10:00 - 11:15 |  Ahilya&apos;s pride Vs Manikarnika (GC)</li>
                                <li>14:00 - 17:00 | Pong Finity</li>
                                <li>17:15 - 18:30 | Eliminator (BC)</li>
                                <li>19:00 - 20:00 | Jhansi Vs Manikarnika (GF)</li>
                                <li>20:30 - 21:30 | Bhagat Blitzers Vs Bharathiyar (FB)</li>
                                <li>21:31 - 22:31 | Veer Subhash squad Vs Shurveer savarkar (FB)</li>
                                <li>22:31 - 23:30 | Netaji Titans Vs Freedom strikers (FB)</li>
                                <li>23:31 - 00:30 | Tilak Titans Vs Freedom Fighter (FB)</li>
                            </ul>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">12|4|2024</time>
                            <div className="text-lg font-black">Day 7</div>
                            <ul>
                                <li>17:15 - 20:00 | Eliminator (BF)</li>
                                <li>20:30 - 00:30 | Eliminator (VB)</li>
                            </ul>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <time className="font-mono italic">13|4|2024</time>
                            <div className="text-lg font-black">Semi Finals</div>
                            <ul>
                                <li>07:00 - 8:00 | Football Semifinal 1</li>
                                <li>9:00 - 10:30 | Cricket Semifinal 1</li>
                                <li>14:00 - 17:00 | PongFinity Semifinal</li>
                                <li>17:01 - 18:30 | Cricket Semifinal 2</li>
                                <li>19:00 - 20:00 | Football Semifinal 2</li>
                                <li>21:00 - 23:00 | Volleyball Semifinal 1,2</li>
                            </ul>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end mb-10">
                            <time className="font-mono italic">14|4|2024</time>
                            <div className="text-lg font-black">Finals</div>
                            <ul>
                                <li>09:00 - 10:30 | Girls Cricket Final</li>
                                <li>10:31 - 12:00 | Boys Football Final</li>
                                <li>14:00 - 17:00 | TT Final</li>
                                <li>17:01 - 18:30 | Boys Cricket Final</li>
                                <li>19:00 - 20:00 | Girls Football Final</li>
                                <li>21:00 - 22:00 | Volleyball Final</li>
                                <li>22:01 - 23:00 | Basketball Final</li>
                            </ul>
                        </div>
                        <hr />
                    </li>
                </ul>
            </main>
            <footer className="footer items-center p-4 bg-neutral text-neutral-content mt-0">
            <aside className="items-center grid-flow-col">
              {/* <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg> */}
              <Image src={iiitv} width={50} height={50} alt='iitv'></Image>
              <p>IIITV-ICD © 2024 - All right reserved</p>
            </aside>
          </footer>
        </>
    )
}
//M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z
export default timeline
