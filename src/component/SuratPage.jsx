import React, { useEffect } from 'react'
import  '../App.css'
import song from '../assets/Adele_-_Make_You_Feel_My_Love.mp3'
import ReactAudioPlayer from 'react-audio-player'

export default function SuratPage() {
  return (
    <div className='container-surat'>
        <div className='card'>
            <h1 className='dancing-script-font'>Hai Abil</h1>
            <p className='dancing-script-font'>Selamat Hari Valentine ya sayang, meskipun sudah lewat. Makasih yah sudah temani aku sampai kita udah melewati 3 kali Valentine. Semoga Valentine berikutnya kita lewati bersama juga. Ini hadiah kecil dari aku, yang di mana kau yang minta. Wkwkwkwk, 
                sebenarnya aku sudah rencanakan mau buat gini, tapi aku takut kau bilang alay, jadi nggak jadi deh. Pas kau minta, aku senang banget, hehehe. 
                Gitu deh, ayy! Kau sekolahnya yang bener yah sayang, ingat kata-kata aku: fokus belajar. Kalau kesepian, ada aku. Gitu deh, love you sayanggg!</p>
                <div className='lagu'>
                  <ReactAudioPlayer src={song} autoPlay={true} controls className='audio-player' />
                </div>
        </div>
    </div>
  )
}
